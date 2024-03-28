import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  status: "success",
  title: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.title = action.payload.title;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
