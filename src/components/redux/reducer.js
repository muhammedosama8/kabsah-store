import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    cart: false,
    contact: false,
    cancel: false,
    item: false,
    download: false,
    quantity: 1,
    stepTwo: false,
    stepThree: false,
    myAddress:{}
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
        stepTwoToggle: (state) =>{state.stepTwo = !state.stepTwo},
        stepThreeToggle: (state) =>{state.stepThree = !state.stepThree},
        increseQunt: (state) =>{state.quantity++},
        decreseQunt: (state) =>{state.quantity--},
        address: (state, action) => {
            return {...state, myAddress: action.payload}
        },
    }
})

export const {cartToggle, contactToggle, cancelToggle, itemToggle, increseQunt, decreseQunt, downloadToggle, stepTwoToggle, stepThreeToggle, address} = modalReducer.actions;
export default modalReducer.reducer;