import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    products: [],
}

const productSlice = createSlice({
    initialState,
    name: "product",
    reducers: {
        loadproduct: (state ,action) => {
            state.products = action.payload;
        }
    },
});
export default productSlice.reducer;
export const { loadproduct } = productSlice.actions;