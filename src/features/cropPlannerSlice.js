import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateAiCropPlannerPrompt } from "../utils/constants";
import axios from "axios";

const initialState = {
  formData: {
    soilType: "",
    waterAccess: "",
    location: "",
    marketDemand: "",
    farmSize: "",
  },
  suggestion: null,
  loading: false,
  loadingText: null,
  error: null,
};

export const handleSubmit = createAsyncThunk(
  "cropPlanner",
  async (data, thunkAPI) => {
    const prompt = generateAiCropPlannerPrompt(data);
    if (!prompt) {
      return thunkAPI.rejectWithValue("Please fill in all required fields.");
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/sawyer-camp/ai-crop-planner`,
        {
          prompt,
        }
      );
      const jobId = response?.data?.jobId;
      if (!jobId) {
        return thunkAPI.rejectWithValue(
          "Could not start AI job. Please try again."
        );
      }

      while (true) {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/sawyer-camp/ai-crop-planner/status/${jobId}`
        );

        const { status, result, error } = res.data || {};

        if (status === "done") {
          return result;
        }

        if (status === "error") {
          return thunkAPI.rejectWithValue(
            error || "Something went wrong. Please try again later."
          );
        }

        // Wait 3 seconds before next poll
        await new Promise((r) => setTimeout(r, 3000));
      }
    } catch (err) {
      console.error("Error: ", err);
      return thunkAPI.rejectWithValue(
        "An error occurred while fetching the AI suggestion. Please try again."
      );
    }
  }
);

const cropPlannerSlice = createSlice({
  name: "aiCropPlanner",
  initialState,
  reducers: {
    setFormData: (state, { payload }) => {
      state.formData = payload;
    },
    setSuggestion: (state, { payload }) => {
      state.suggestion = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setLoadingText: (state, { payload }) => {
      state.loadingText = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSubmit.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.suggestion = null;
      })
      .addCase(handleSubmit.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.suggestion = action.payload;
      })
      .addCase(handleSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong.";
      });
  },
});

export const {
  setFormData,
  setSuggestion,
  setLoading,
  setError,
  setLoadingText,
} = cropPlannerSlice.actions;

export default cropPlannerSlice.reducer;
