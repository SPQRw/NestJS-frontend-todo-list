import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IResponseUserData } from "../../types/types";

// Define a type for the slice state
interface UserState {
  user: string | null;
  isAuth: boolean;
  activeUser: IResponseUserData | null;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  isAuth: false,
  activeUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, actions: PayloadAction<string>) => {
      state.user = actions.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
    isActive: (state, actions: PayloadAction<IResponseUserData>) => {
      state.activeUser = actions.payload;
      state.isAuth = true;
    },
  },
});

export const { login, logout, isActive } = userSlice.actions;

export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
