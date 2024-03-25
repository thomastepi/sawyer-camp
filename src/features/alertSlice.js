import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  status: "success",
  title: "",
  show: false,
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
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
