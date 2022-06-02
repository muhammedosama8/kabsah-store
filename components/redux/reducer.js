import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    cart: false,
    contact: false,
    cancel: false,
    item: false,
    download: false,
    quantity: 1
}

 const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        cartToggle: (state) =>{ state.cart = !state.cart},
        contactToggle: (state) =>{state.contact = !state.contact},
        cancelToggle: (state) =>{state.cancel = !state.cancel},
        downloadToggle: (state) =>{state.download = !state.download},
        itemToggle: (state) =>{state.item = !state.item},
        increseQunt: (state) =>{state.quantity++},
        decreseQunt: (state) =>{state.quantity--},
    }
})

export const {cartToggle, contactToggle, cancelToggle, itemToggle, increseQunt, decreseQunt, downloadToggle} = modalReducer.actions;
export default modalReducer.reducer;