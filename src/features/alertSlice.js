import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  status: "success",
  title: "",
  show: false,
  isSuccessful: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.title = action.payload.title;
      state.show = action.payload.show;
      state.isSuccessful = action.payload.isSuccessful;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
