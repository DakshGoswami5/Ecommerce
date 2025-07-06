import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    users: [],
}

const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        loaduser: (state ,action) => {
            state.users = action.payload;
        },
    },
});
export default userSlice.reducer;
export const { loaduser } = userSlice.actions;