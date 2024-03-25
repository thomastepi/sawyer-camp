import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setAlert } from "./alertSlice";
import axios from "axios";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  isLoading: false,
};

export const submitNewsletter = createAsyncThunk(
  "newsletter/submitNewsletter",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/newsletter/send-email",
        data
      );
      thunkAPI.dispatch(
        setAlert({
          message:
            response.data.message ||
            "Thank you for subscribing! We will send you updates soon.",
          status: "success",
          title: "Success!",
          show: true,
          isSuccessful: true,
        })
      );
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(
        setAlert({
          message: "An error occured, please try again later",
          status: "error",
          title: "Error!",
          show: true,
          isSuccessful: false,
        })
      );
      return error.message;
    }
  }
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setisLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitNewsletter.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(submitNewsletter.fulfilled, (state, action, dispatch) => {
      state.isLoading = false;
    });
    builder.addCase(submitNewsletter.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { setEmail, setFirstName, setLastName, setCompany, setisLoading } =
  newsletterSlice.actions;

export default newsletterSlice.reducer;
