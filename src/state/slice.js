import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [
    // {
    //   header: "Some Error", // just like header or title text can be ommitted
    //   bulletPoint: true, // do you want bulletpoints or not in front of your notification
    //   info: ["error no 1", "error no 2"], // array of strings u want to display
    //   overlay: true, // boolean value
    //   type: "error", //one of four types => "error", "warning", "normal", "successful", "loading"
    // },
  ],
  loading: {
    //   header: "Some Error", // just like header or title text can be ommitted
    //   bulletPoint: true, // do you want bulletpoints or not in front of your notification
    //   info: ["error no 1", "error no 2"], // array of strings u want to display
    //   overlay: true, // boolean value
    //   type: "error", //one of four types => "error", "warning", "normal", "successful", "loading"
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateNotifications: (state, action) => {
      return { ...state, notifications: action.payload };
    },
    updateLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateNotifications, updateLoading, updateActivities } =
  appSlice.actions;

export default appSlice.reducer;
