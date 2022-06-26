import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAxios, { BASE_URL } from "../../api";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      const data = await res.json();
      return data
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async (userInfo, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/users/${userInfo.userId}/verify/${userInfo.tokenId}`)
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    const data = await res.json();
    const { userId, userType, authToken } = data;
    const user = {
      userId, userType, authToken
    }
    localStorage.setItem("user", JSON.stringify(user));
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  console.log(thunkAPI)
  thunkAPI.dispatch(reset())
  localStorage.removeItem("user")
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "failed";
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "failed";
    },
    [verify.pending]: (state) => {
      state.isLoading = true;
    },
    [verify.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "failed";
    },
    [verify.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "failed";
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "failed";
      state.user = {
        userId: action.payload.userId,
        userType: action.payload.userType,
        authToken: action.payload.authToken,
      }
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "failed";
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
    }
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
