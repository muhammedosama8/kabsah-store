import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    itemSelected: {},
    totalItems: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem(state, action){
            const itemIndex = state.cart.findIndex((item) => item.name === action.payload.name)
            if(itemIndex >= 0){
                state.cart[itemIndex].quantity += action.payload.quantity;
            } else{
                state.cart.push(action.payload)
                state.totalItems++
            }
        },
        addItemSelected: (state, action) =>{
            return {...state, itemSelected: action.payload, closeModal: true}
        },
        deleteItem (state, action){
           return {...state, cart: state.cart.filter(({name}) => action.payload.name !== name) , totalItems: state.totalItems-1}
        },
        increseQuntity: (state, action) => {
            return{...state, quantity: state.cart.quantity+=1} 
        },
        decreseQuntity: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.name === action.payload.name)
            console.log(itemIndex);
            if(itemIndex >= 0){
                return state.cart[itemIndex].quantity -= 1;
            }
        },
    }
    
})
export const { addItem, addItemSelected, deleteItem, increseQuntity, decreseQuntity } = cartSlice.actions;
export default cartSlice.reducer;
