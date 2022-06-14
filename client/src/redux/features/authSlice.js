import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

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
  async (user, thunkAPI) => {
    try {
      const res = await api.post("api/v1/users", user);
      return res.data;
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
      const res = await api.get(`api/v1/users/${userInfo.userId}/verify/${userInfo.tokenId}`)
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    const res = await api.post("api/v1/users/login", userData);
    const { userId, userType, authToken } = res.data;
    const user = {
      userId, userType, authToken
    }
    localStorage.setItem("user", JSON.stringify(user));
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  console.log(thunkAPI)
  thunkAPI.dispatch(reset())
  await localStorage.removeItem("user")
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
      state.message = action.payload.message;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    [verify.pending]: (state) => {
      state.isLoading = true;
    },
    [verify.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload.message;
    },
    [verify.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload.message;
      state.user = {
        userId: action.payload.userId,
        userType: action.payload.userType,
        authToken: action.payload.authToken,
      }
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
    }
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
