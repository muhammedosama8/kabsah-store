import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart : [
        /* {name: 'ميكس ماجيك' , price: 150,img: images.order1 },
        {name: 'وجبة لحوم ' , price: 180,img: images.order2 , description:'ربع كيلو شيش طاووق مشوي + ربع كيلو كفته مشوي + ارز البسمتي + صوص + توميه + عيش'},
        {name: 'ميكس ماجيك' , price: 150,img: images.order1 , description:'ربع كيلو شيش طاووق مشوي + ربع كيلو كفته مشوي + ارز البسمتي + صوص + توميه + عيش'},
        {name: ' وجبة ميكس لحوم' , price: 130,img: images.order2 , description:'ربع كيلو شيش طاووق مشوي + ربع كيلو كفته مشوي + ارز البسمتي + صوص + توميه + عيش'} */
    ]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action) => [...state, action.payload]
    }
})

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
