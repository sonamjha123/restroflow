import { createSlice } from "@reduxjs/toolkit";

// this reducer function modifies the slice
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers: {
        // action is an object
        // action.payload

        addItem: (state, action) => {
            //we are mutating the state here , directly changing the state
            state.items.push(action.payload);
            
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;// []
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

