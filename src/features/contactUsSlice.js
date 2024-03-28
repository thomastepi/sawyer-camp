import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setAlert } from "./alertSlice";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  message: "",
  isLoading: false,
  status: "",
  show: false,
};

export const submitContactUs = createAsyncThunk(
  "contactUs/submitContactUs",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contact-us/send-email`,
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
        thunkAPI.dispatch(setContactUsStatus("success"));
        thunkAPI.dispatch(setContactUsShow(true));
      } else {
        thunkAPI.dispatch(
          setAlert({
            message: "There was an error sending your message",
            status: "error",
            title: "Error!",
          })
        );
        thunkAPI.dispatch(setContactUsStatus("error"));
        thunkAPI.dispatch(setContactUsShow(true));
      }

      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(
        setAlert({
          message: "An error occured, please try again later",
          status: "error",
          title: "Error!",
        })
      );
      thunkAPI.dispatch(setContactUsStatus("error"));
      thunkAPI.dispatch(setContactUsShow(true));
      return error.message;
    }
  }
);

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setisLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setContactUsStatus: (state, action) => {
      state.status = action.payload;
    },
    setContactUsShow: (state, action) => {
      state.show = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitContactUs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(submitContactUs.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(submitContactUs.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  setName,
  setEmail,
  setMessage,
  setisLoading,
  setContactUsStatus,
  setContactUsShow,
} = contactUsSlice.actions;

export default contactUsSlice.reducer;
