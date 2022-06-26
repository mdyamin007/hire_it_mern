import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../api";


const initialState = {
    applications: [],
    applicantDetails: {},
    data: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const uploadApplication = createAsyncThunk("cv/upload", async (formData, thunkAPI) => {
    try {
        const res = await apiAxios("api/v1/cv", "POST", formData);
        console.log(res);
        return res
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getAllApplications = createAsyncThunk("cv/all", async (_, thunkAPI) => {
    try {
        const res = await apiAxios("api/v1/cv");
        return res
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getApplicantDetailsById = createAsyncThunk("cv/findById", async (applicantId, thunkAPI) => {
    try {
        const res = await apiAxios("api/v1/cv/" + applicantId);
        return res
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const cvSlice = createSlice({
    name: "cv",
    initialState,
    extraReducers: {
        [uploadApplication.pending]: (state) => {
            state.isLoading = true;
        },
        [uploadApplication.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload;
            state.message = "Uploaded successfully"
        },
        [uploadApplication.rejected]: (state) => {
            state.isError = true;
            state.isLoading = false;
            state.message = "Error occurred!"
        },
        [getAllApplications.fulfilled]: (state, action) => {
            state.applications = action.payload.cv
            state.message = action.payload.message
        },
        [getApplicantDetailsById.fulfilled]: (state, action) => {
            state.applicantDetails = action.payload.cv
            state.message = action.payload.message
        }
    }
})

export default cvSlice.reducer;