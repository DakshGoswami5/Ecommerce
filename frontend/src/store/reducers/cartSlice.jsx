import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    carts: [],
}

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        loadcart: (state ,action) => {
            state.carts = action.payload;
        }
    },
});
export default cartSlice.reducer;
export const { loadcart } = cartSlice.actions;