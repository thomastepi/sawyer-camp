import { configureStore } from "@reduxjs/toolkit";
import newsletterSlice from "./features/newsletterSlice";
import contactUsSlice from "./features/contactUsSlice";
import alertSlice from "./features/alertSlice";

export const store = configureStore({
  reducer: {
    newsletter: newsletterSlice,
    contactUs: contactUsSlice,
    alert: alertSlice,
  },
});
