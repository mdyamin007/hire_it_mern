import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../../api";



const initialState = {
    companies: [],
    message: ""
};

export const getAllCompanies = createAsyncThunk("companies/all", async (_, thunkAPI) => {
    try {
        const res = await apiAxios("/api/v1/companies")
        return res.companies
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const setACompany = createAsyncThunk("companies/create", async (company, thunkAPI) => {
    try {
        const res = await apiAxios("/api/v1/companies", "POST", company)
        return res.message
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
        },
        [setACompany.fulfilled]: (state, action) => {
            state.message = action.payload;
        }
    }
})

export default companiesSlice.reducer;