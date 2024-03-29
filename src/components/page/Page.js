import React from 'react';
import modalReducer from '../redux/reducer';
import Categories from './Categories/Categories';
import Items from './Items/Items';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import CancelModal from './CancelModal/CancelModal';
import './page.scss';
import { Provider } from 'react-redux';
import CartModal from './CartModal/CartModal';
import { configureStore } from '@reduxjs/toolkit';
import ContactModal from './ContactModal/ContactModal';
import ItemModal from './ItemModal/ItemModal';
import DownloadModal from './DownloadModal/DownloadModal';
import cartReducer from '../redux/cartReducer';
import CartModalStepTwo from './CartModal/OrderSteps/CartModalStepTwo';
import CartModalStepThree from './CartModal/OrderSteps/CartModalStepThree';

const store = configureStore({
    reducer:{
        modal: modalReducer,
        cart: cartReducer
    }
});
const Page = () => {
    return ( 
        <Provider store={store}>
            <div className='page'>
                <Navbar />
                <Header />
                <Categories />
                <Items />
                <Footer />
                <Modals />
            </div>
        </Provider>
     );
}
const Modals =() =>{
    return(
        <>
        <CartModal />
        <ContactModal />
        <CancelModal />
        <ItemModal />
        <DownloadModal />
        <CartModalStepTwo />
        <CartModalStepThree />
        </>
    )
}
 
export default Page;