import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios, { BASE_URL } from "../../api";
import axios from "axios";



const initialState = {
    job_posts: [],
    job_post: {},
    message: ""
};

export const getAllJobPosts = createAsyncThunk("jobs/all", async (_, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/api/v1/job_posts`)
        return res.data.jobPosts
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getAJobPostByID = createAsyncThunk("jobs/id", async (id, thunkAPI) => {
    try {
        const res = await axios.get(`${BASE_URL}/api/v1/job_posts/${id}`)
        console.log(res.data)
        return res.data.jobDescription
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const createAJobPost = createAsyncThunk("jobs/create", async (data, thunkAPI) => {
    try {
        const res = await apiAxios("/api/v1/job_posts", "POST", data)
        return res.message
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const applyForJob = createAsyncThunk("jobs/apply", async (data, thunkAPI) => {
    try {
        const res = await apiAxios("/api/v1/jobCV", "POST", data)
        return res.message
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue("Error occurred!");
    }
})

const jobPostsSlice = createSlice({
    name: "job_posts",
    initialState,
    extraReducers: {
        [getAllJobPosts.fulfilled]: (state, action) => {
            state.job_posts = action.payload;
        },
        [createAJobPost.fulfilled]: (state, action) => {
            state.message = action.payload;
        },
        [getAJobPostByID.fulfilled]: (state, action) => {
            state.job_post = action.payload
        },
        [applyForJob.fulfilled]: (state, action) => {
            state.message = action.payload
        },
        [applyForJob.rejected]: (state, action) => {
            state.message = action.payload
        }
    }
})

export default jobPostsSlice.reducer;