import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { cartToggle, stepThreeToggle, stepTwoToggle } from '../../../redux/reducer';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import './cartModalSteps.scss';


const CartModalStepTwo = () => {
    const stepTwo = useSelector(state => state.modal.stepTwo);
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const delivery = 10
    const dispatch = useDispatch();

    const totalPriceWithDelivery = +totalPrice+delivery;
    const backStep= () =>{
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
            marginTop: '21%',
        },
      };
    return (  
        <>
        <Modal
            isOpen={stepTwo}
            onRequestClose={() => dispatch(stepTwoToggle())}
            contentLabel="Example Modal"
            style={customStyles} 
            >
            <motion.div
            whileInView={{y:[50, 0], opacity: [0, 1]}}
            transition={{duration: .5}}
            className='cart-modal'
            >
                <button onClick={() => dispatch(stepTwoToggle())} className='close-modal'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className='modal-header'>
                    <h3 className='title'> اكمال الطلب</h3>
                    <span>قم بإدخال البيانات لاكمال الطلب</span>
                </div>
                <div className='content d-flex' style={{height: '120px'}}>
                    <div className='total-price'>
                        <p className='title'>المجموع الكلي</p>
                        <p className='title'>{totalPriceWithDelivery} ج.م.</p>
                    </div>
                    <div className='delivery'>
                        <div className='d-flex'>
                            <p className='title'>التوصيل</p>
                            <p>{delivery} ج.م.</p>
                        </div>
                        <div className='d-flex'>
                            <p className='title'>المجموع الفرعي</p>
                            <p>{totalPrice} ج.م.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='discount'>
                    <input type='text' placeholder='ادخل كود الخصم ثم اضغط تطبيق' />
                    <button>تطبيق</button>
                </div>
                <div className='buttons'>
                    <button className='back' onClick={()=> backStep()}>رجوع </button>
                    <button className='next' onClick={() => {
                        dispatch(stepTwoToggle())
                        dispatch(stepThreeToggle())
                        }
                    }> الخطوة التالية  </button>
                </div>
                </motion.div>
        </Modal>
        </>
    );
}
 
export default CartModalStepTwo;