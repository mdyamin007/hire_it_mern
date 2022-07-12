import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../api";

const initialState = {
  applications: [],
  application: null,
};

export const getAllCVForTheJob = createAsyncThunk(
  "jobCV/all",
  async (jobId, thunkAPI) => {
    try {
      const response = await apiAxios(`/api/v1/jobCV/job/${jobId}`, "GET");
      //   console.log(response);
      return response.cv;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue("Error occurred");
    }
  }
);

export const getCVByApplicationId = createAsyncThunk(
  "jobCV/Id",
  async (applicationId, thunkAPI) => {
    try {
      const response = await apiAxios(
        `/api/v1/jobCV/application/${applicationId}`
      );
      return response.cv;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue("Error occurred");
    }
  }
);

const jobCVSlice = createSlice({
  name: "jobCV",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCVForTheJob.fulfilled]: (state, action) => {
      state.applications = action.payload;
    },
    [getCVByApplicationId.fulfilled]: (state, action) => {
      state.application = action.payload;
    },
  },
});

export default jobCVSlice.reducer;
