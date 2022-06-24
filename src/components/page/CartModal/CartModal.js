import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { cartToggle, stepTwoToggle } from '../../redux/reducer';
import './cartModal.scss';
import { faTimes, faPlus, faMinus, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {deleteItem, increseQuntity, decreseQuntity} from '../../redux/cartReducer';


const CartModal = () => {
    const cart = useSelector(state => state.modal.cart);
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();

   const totalPrice = cartItems.reduce((a,i) => a + i.quantity*i.price, 0).toFixed(2)
   const nextStep= () =>{
        dispatch(cartToggle())
        dispatch(stepTwoToggle())
   }
    useEffect(()=>{
        Modal.setAppElement('body');
    })
    
    const customStyles = {
        content: {
            background: 'none',
            border: 'none',
            width: '389px',
            maxHeight: '550px',
            overflow: 'hidden',
            padding: '0',
            position: 'initial',
            marginTop: '5%',
        },
      };
    return (  
        <>
        <Modal
            isOpen={cart}
            onRequestClose={() => dispatch(cartToggle())}
            contentLabel="Example Modal"
            style={customStyles} 
            >
            <motion.div
            whileInView={{y:[50, 0], opacity: [0, 1]}}
            transition={{duration: .5}}
            className='cart-modal'
            >
                <button onClick={() => dispatch(cartToggle())} className='close-modal'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className='modal-header'>
                    <h3 className='title'>سلة التسوق</h3>
                    <div className='total-price'>
                        <span>المجموع الفرعي:</span>
                        <span className='amount'>{totalPrice} ج.م</span>
                    </div>
                </div>
                <div className='content'>
                    {cartItems.length === 0 ? <h2 className='empty'>لا يوجد منتجات فى عربة التسوق</h2> : ''}
                    {cartItems && cartItems.map((item,index)=> (
                        <div key={index} className='list'>
                            <div className='list-img'>
                                <img  draggable='false' src={item.img} alt='order' />
                            </div>
                            <div className='list-details'>
                                <div>
                                    <h5 className='name'>{item.name}</h5>
                                    <p className='quantity'>{item.quantity} قطعه</p>
                                    <p className='price'> {item.price} ج.م</p>
                                </div>
                                <div className='controll'>
                                    <button className='increse'
                                    onClick={()=> dispatch(increseQuntity(item.quantity))}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <p className='qunt'>{item.quantity}</p>
                                    <button className='decrese'
                                    onClick={()=> dispatch(decreseQuntity(item.quantity))}>
                                    <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className='trash'>
                                <button onClick={()=> dispatch(deleteItem(item))}>
                                <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='buttons'>
                    <button className='c-shopping' onClick={() => dispatch(cartToggle())}>متابعة التسوق</button>
                    <button className='c-order' onClick={()=> nextStep()} disabled={cartItems.length === 0}>اكمال الطلب  </button>
                </div>
                </motion.div>
        </Modal>
        </>
    );
}
 
export default CartModal;