import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState = {
  video: [],
  currentPlaying: null,
  searchTerm: "",
  searchResult: [],
  nextPage: null,
  recommendeVideo: [],
};

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (statee, action) => {});
  },
});

export default youtubeSlice.reducer;
