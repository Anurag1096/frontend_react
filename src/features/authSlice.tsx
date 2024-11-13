import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define user data types for input and response
interface UserData {
  userName: string;
  password: string;
}

interface UserResponse {
  id: string;
  userName: string;
  token: string;
}

interface ErrorResponse {
  error: string;
}
type FormData = {
  name: string;
  gender: string;
  userName: string;
  password: string;
  userImage?: HTMLImageElement;
};

// Define loginUser thunk with response type UserResponse
export const loginUser = createAsyncThunk<
  UserResponse, // Success return type
  UserData, // Thunk argument type
  { rejectValue: ErrorResponse } // Error return type
>("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post("/login", userData);
    localStorage.setItem('token', response.data.token);
    return response.data as UserResponse; // Cast response data
  } catch (error: any) {
    return rejectWithValue(error.response.data as ErrorResponse);
  }
});

export const signupUser = createAsyncThunk<
UserResponse,
FormData,
{ rejectValue: ErrorResponse }
>(
    "auth/signup",async (formData, {rejectWithValue})=>{

      try{
        const response=await axios.post("/signup",formData,{
          headers:{
            'Content-Type':'multipart/form-data',
          },
        });
        localStorage.setItem('token', response.data.token)
        console.log("Response Data",response.data);
        return response.data as UserResponse;
      }catch(error:any){
        return rejectWithValue(error.response.data as ErrorResponse);
      }
    }
)


interface AuthState {
  user: UserResponse | null;
  loading: boolean;
  error: ErrorResponse | null;
}

// Define the initial state with appropriate types
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { error: "Unknown error" };
      })
       //   For signup case
      .addCase(signupUser.pending,(state)=>{
        state.loading=true;
        state.error= null;
      })
      .addCase(signupUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user =  action.payload;

      })
      .addCase(signupUser.rejected, (state, action)=>{
        state.loading=false;
        state.error = action.payload || {error:"Unknown error"}
      });

   
    
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
