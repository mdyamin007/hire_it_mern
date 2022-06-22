import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";



const initialState = {
    job_posts: [],
    message: ""
};

export const getAllJobPosts = createAsyncThunk("jobs/all", async (_, thunkAPI) => {
    try {
        const res = await api.get("api/v1/job_posts")
        return res.data.jobPosts
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const createAJobPost = createAsyncThunk("jobs/create", async (data, thunkAPI) => {
    try {
        const res = await api.post("api/v1/job_posts", data)
        return res.data.message
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
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
        }
    }
})

export default jobPostsSlice.reducer;