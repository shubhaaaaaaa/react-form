import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: ''
  },
  reducers: {
    storeName: (state, action) => {
      state.username = action.payload
    },
    clearUser: (state) => {
      state.username = "";
      localStorage.removeItem("username"); 
    },
  },
});

export const { storeName, clearUser } = userSlice.actions;
export default userSlice.reducer;
