import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { decreseQunt, increseQunt,cartToggle } from '../../redux/reducer';
import './cartModal.scss';
import { faTimes, faPlus, faMinus, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import images from '../../../assets';


const CartModal = () => {
    const cart = useSelector(state => state.modal.cart);
    const quantity = useSelector(state => state.modal.quantity);
    
    const dispatch = useDispatch();

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
            /* marginRight: 'calc(100% - 443px)', */
            position: 'initial',
            /* top: '25%' */
            marginTop: '5%'
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
                    <h2 className='title'>سلة التسوق</h2>
                    <div className='total-price'>
                        <span>المجموع الفرعي:</span>
                        <span className='amount'>230 ج.م</span>
                    </div>
                </div>
                <div className='content'>
                        <div className='list'>
                            <div className='list-img'>
                                <img  draggable='false' src={images.order1} alt='order' />
                            </div>
                            <div className='list-details'>
                                <div>
                                    <h5 className='name'>وجبة ميكس لحوم</h5>
                                    <p className='quantity'>1 قطعه</p>
                                    <p className='price'> 130 ج.م</p>
                                </div>
                                <div className='controll'>
                                    <button className='increse'
                                    onClick={()=> dispatch(increseQunt())}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <input type='number' name='quantity' value={quantity} min='1' 
                                    max='100'/>
                                    <button className='decrese'
                                    onClick={()=> dispatch(decreseQunt())}>
                                    <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className='trash'>
                                <button >
                                <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                        <div className='list'>
                            <div className='list-img'>
                                <img  draggable='false' src={images.order1} alt='order' />
                            </div>
                            <div className='list-details'>
                                <div>
                                    <h5 className='name'>وجبة ميكس لحوم</h5>
                                    <p className='quantity'>1 قطعه</p>
                                    <p className='price'> 130 ج.م</p>
                                </div>
                                <div className='controll'>
                                    <button className='increse'
                                    onClick={()=> dispatch(increseQunt())}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <input type='number' name='quantity' value={quantity} min='1' 
                                    max='100'/>
                                    <button className='decrese'
                                    onClick={()=> dispatch(decreseQunt())}>
                                    <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className='trash'>
                                <button >
                                <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                        <div className='list'>
                            <div className='list-img'>
                                <img  draggable='false' src={images.order1} alt='order' />
                            </div>
                            <div className='list-details'>
                                <div>
                                    <h5 className='name'>وجبة ميكس لحوم</h5>
                                    <p className='quantity'>1 قطعه</p>
                                    <p className='price'> 130 ج.م</p>
                                </div>
                                <div className='controll'>
                                    <button className='increse'
                                    onClick={()=> dispatch(increseQunt())}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <input type='number' name='quantity' value={quantity} min='1' 
                                    max='100'/>
                                    <button className='decrese'
                                    onClick={()=> dispatch(decreseQunt())}>
                                    <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className='trash'>
                                <button >
                                <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                        <div className='list'>
                            <div className='list-img'>
                                <img  draggable='false' src={images.order1} alt='order' />
                            </div>
                            <div className='list-details'>
                                <div>
                                    <h5 className='name'>وجبة ميكس لحوم</h5>
                                    <p className='quantity'>1 قطعه</p>
                                    <p className='price'> 130 ج.م</p>
                                </div>
                                <div className='controll'>
                                    <button className='increse'
                                    onClick={()=> dispatch(increseQunt())}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <input type='number' name='quantity' value={quantity} min='1' 
                                    max='100'/>
                                    <button className='decrese'
                                    onClick={()=> dispatch(decreseQunt())}>
                                    <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className='trash'>
                                <button >
                                <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                </div>
                <div className='buttons'>
                    <button className='c-shopping'>متابعة التسوق</button>
                    <button className='c-order'>اكمال الطلب  </button>
                </div>
                </motion.div>
            </Modal>
        </>
    );
}
 
export default CartModal;