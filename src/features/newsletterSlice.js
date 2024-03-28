import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setAlert } from "./alertSlice";
import axios from "axios";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  isLoading: false,
  status: "",
  show: false,
};

export const submitNewsletter = createAsyncThunk(
  "newsletter/submitNewsletter",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/newsletter/send-email`,
        data
      );
      if (response.data.message) {
        thunkAPI.dispatch(
          setAlert({
            message: response.data.message,
            status: "success",
            title: "Success!",
          })
        );
        thunkAPI.dispatch(setNewsletterStatus("success"));
        thunkAPI.dispatch(setNewsletterShow(true));
      } else {
        thunkAPI.dispatch(
          setAlert({
            message: "There was an error sending your message",
            status: "error",
            title: "Error!",
          })
        );
        thunkAPI.dispatch(setNewsletterStatus("error"));
        thunkAPI.dispatch(setNewsletterShow(true));
      }

      return response.data;
    } catch (error) {
      thunkAPI.dispatch(
        setAlert({
          message: "An error occured, please try again later",
          status: "error",
          title: "Error!",
        })
      );
      thunkAPI.dispatch(setNewsletterStatus("error"));
      thunkAPI.dispatch(setNewsletterShow(true));
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
    setNewsletterStatus: (state, action) => {
      state.status = action.payload;
    },
    setNewsletterShow: (state, action) => {
      state.show = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitNewsletter.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(submitNewsletter.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(submitNewsletter.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  setEmail,
  setFirstName,
  setLastName,
  setCompany,
  setisLoading,
  setNewsletterStatus,
  setNewsletterShow,
} = newsletterSlice.actions;

export default newsletterSlice.reducer;
