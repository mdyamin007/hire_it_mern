import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";



const initialState = {
    companies: []
};

export const getAllCompanies = createAsyncThunk("companies/all", async (_, thunkAPI) => {
    try {
        const res = await api.get("api/v1/companies")
        return res.data.companies
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const companiesSlice = createSlice({
    name: "companies",
    initialState,
    extraReducers: {
        [getAllCompanies.fulfilled]: (state, action) => {
            state.companies = action.payload;
        }
    }
})

export default companiesSlice.reducer;