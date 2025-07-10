import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    users: null,
}

const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        loaduser: (state ,action) => {
            state.users = action.payload;
        },
        removeuser: (state, action) => {
            state.users = null;
        }
    },
});
export default userSlice.reducer;
export const { loaduser, removeuser } = userSlice.actions;