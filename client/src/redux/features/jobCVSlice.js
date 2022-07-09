import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../api";

const initialState = {
    applications: [],
}

export const getAllCVForTheJob = createAsyncThunk("jobCV/all", async (jobId, thunkAPI) => {
    try {
        const response = await apiAxios(`/api/v1/jobCV/job/${jobId}`, "GET")
        return response.data.cv;
    } catch (error) {
        console.log(error)
        thunkAPI.rejectWithValue("Error occurred")
    }
})

const jobCVSlice = createSlice({
    name: "jobCV",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCVForTheJob.fulfilled]: (state, action) => {
            state.applications = action.payload
        }
    }
})

export default jobCVSlice.reducer