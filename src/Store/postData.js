import { createSlice } from "@reduxjs/toolkit";

const postData = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addVideoData: (state, action) => {
     return state = action.payload;
    },
  },
});

export const {addVideoData}= postData.actions;
export default postData.reducer;