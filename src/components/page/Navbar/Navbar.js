import React from 'react';
import './navbar.scss';
import { useDispatch, useSelector} from 'react-redux';
import { cartToggle, contactToggle, cancelToggle } from '../../redux/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faStore, faUndo } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const totalItems = useSelector(state => state.cart.totalItems)
    const dispatch = useDispatch();
    
    return ( 
        <>
            <div className='navbar'>
                <div className='menu-item active'>
                    <button className='menu-item-link'>
                    <FontAwesomeIcon className='link-icon' icon={faHome} />
                        <span>الرئيسية</span>
                    </button>
                </div>
                <div className='menu-item '>
                    <button onClick={() => dispatch(cartToggle())} className='menu-item-link cart'>
                    <FontAwesomeIcon className='link-icon' icon={faShoppingCart} />
                        <span>عربه التسوق</span>
                        <span className='total-items'>{totalItems ? totalItems : ''}</span>
                    </button>
                </div>
                <div onClick={() => dispatch(contactToggle())} className='menu-item'>
                    <button  className='menu-item-link'>
                    <FontAwesomeIcon className='link-icon' icon={faStore} />
                        <span>اتصل بنا</span>
                    </button>
                </div>
                <div className='menu-item'>
                    <button className='menu-item-link' onClick={() => dispatch(cancelToggle())}>
                    <FontAwesomeIcon className='link-icon' icon={faUndo} />
                        <span>إلغاء الطلب</span>
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;