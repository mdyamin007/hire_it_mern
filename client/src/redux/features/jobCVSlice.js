import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../api";

const initialState = {
  applications: [],
  application: null,
  job_posts: []
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

export const getJobPostsByApplicationId = createAsyncThunk("jobCV/getMatch", async (data, thunkAPI) => {
  try {
      const res = await apiAxios("/api/v1/profileMatcher/getMatchList", "POST", data);
      return res.data;
  } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

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
    [getJobPostsByApplicationId.fulfilled]: (state, action) => {
      state.job_posts = action.payload;
    },
  },
});

export default jobCVSlice.reducer;
