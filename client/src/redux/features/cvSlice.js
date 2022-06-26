import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";


const initialState = {
    data: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const uploadApplication = createAsyncThunk("cv/upload", async (formData, thunkAPI) => {
    try {
        const res = api.post("api/v1/cv", formData);
        console.log(res);
        return res.data
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
        }
    }
})

export default cvSlice.reducer;