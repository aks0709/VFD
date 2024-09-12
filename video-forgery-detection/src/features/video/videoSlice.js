import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoFile: null,
    previewUrl: null,
    result: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    uploadVideo: (state, action) => {
      state.videoFile = action.payload.file;
      state.previewUrl = URL.createObjectURL(action.payload.file);
      state.result = null;
      state.error = null;
    },
    setResult: (state, action) => {
      state.result = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearState: (state) => {
      state.videoFile = null;
      state.previewUrl = null;
      state.result = null;
      state.error = null;
    },
  },
});

export const { uploadVideo, setResult, setLoading, setError, clearState } = videoSlice.actions;
export default videoSlice.reducer;
