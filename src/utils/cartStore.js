import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers: {
        addItems: (state,action) =>{
            // modifying our app directly (mutating )
            state.items.push(action.payload);
        },
        removeItems: (state,action)=>{
            state.items.pop();
        },
        clearCart: (state,action)=>{
            //state.items.length = 0;//originalState = []
            return {items:[]};//this new obj will be repalced inside originalState
        },
    },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default  cartSlice.reducer;