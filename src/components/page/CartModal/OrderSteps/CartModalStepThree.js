import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { stepThreeToggle, stepTwoToggle, address } from '../../../redux/reducer';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import './cartModalSteps.scss';


const CartModalStepThree = () => {
    const stepThree = useSelector(state => state.modal.stepThree);
    const [delivery, setDelivery] = useState('toHome')
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [addressInfo, setAddressInfo] = useState(null)
    const [area, setArea] = useState(null)
    const [comment, setComment] = useState(null)
    const dispatch = useDispatch();

    const backStep= () =>{
        dispatch(stepThreeToggle())
        dispatch(stepTwoToggle())
   }

   const sendToWhats = ()=> {
        dispatch(address({
            name, phone,
            addressInfo, area, comment
        }))
        dispatch(stepThreeToggle())
   }
    useEffect(()=>{
        Modal.setAppElement('body');
    },[])
    
    const customStyles = {
        content: {
            background: 'none',
            border: 'none',
            width: '389px',
            maxHeight: '550px',
            overflow: 'hidden',
            padding: '0',
            position: 'initial',
            marginTop: '7%',
        },
      };
    return (  
        <>
        <Modal
            isOpen={stepThree}
            onRequestClose={() => dispatch(stepThreeToggle())}
            contentLabel="Example Modal"
            style={customStyles} 
            >
            <motion.div
            whileInView={{y:[50, 0], opacity: [0, 1]}}
            transition={{duration: .5}}
            className='cart-modal'
            >
                <button onClick={() => dispatch(stepThreeToggle())} className='close-modal'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className='modal-header'>
                    <h3 className='title'> اكمال الطلب</h3>
                    <span>قم بإدخال البيانات لاكمال الطلب</span>
                </div>
                <div className='delivery stepThree'>
                        <div className='deliver-way div'>
                            <p>الرجاء التحديد</p>
                            <h3>طريقة التسليم</h3>
                            <div className='home'>
                                <label htmlFor='home'>التوصيل الي المنزل</label>
                                <input type='radio' id='home' value='toHome' onChange={(e)=>setDelivery(e.target.value)} name='deliver' checked />
                            </div>
                            <div className='market'>
                                <label htmlFor='market'> الاستلام من الفرع </label>
                                <input type='radio' id='market' value='fromMarket' onChange={(e)=>setDelivery(e.target.value)} name='deliver' />
                            </div>
                            <div className='name input'>
                                <label htmlFor='name'> الاسم </label>
                                <input type='text' id='name' name='name' required onChange={(e)=> setName(e.target.value) } />
                            </div>
                            <div className='phone input'>
                                <label htmlFor='phone'> هاتفك </label>
                                <input type='number' id='phone' name='phone' onChange={(e)=> setPhone(e.target.value)}  />
                            </div>
                        </div>
                        {delivery==='fromMarket' && <div className='address div'>
                            <p> اكمل العنوان</p>
                            <h3> تفاصيل التوصيل </h3>
                            <div className='input'>
                                <label>اكتب عنوانك بالتفصيل...</label>
                                <input type='text' placeholder='-' onChange={(e)=> setAddressInfo(e.target.value)}  />
                                <span className='require'>
                                مطلوب
                                </span>
                            </div>
                            <div className='area input'>
                                <label>المناطق</label>
                                <select onChange={(e) => {
                                    setArea(e.target.value)
                                }} name='select-area'>
                                <option>اختر منطقه التسليم</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                </select>
                            </div>
                        </div>}
                        <div className='comment div'>
                            <h3>تعليق</h3>
                            <p>اخبرنا إذا كان هناك شئ لا تريدنا أن ننساه</p>
                            <div className='input'>
                                <label>أدخل رسالتك</label>
                                <textarea type='text' rows='4' style={{height: '75px'}} onChange={(e) => setComment(e.target.value)}  placeholder='تعليقك هنا...' />
                                <span className='require'>
                                اختياري
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='back' onClick={()=> backStep()}>رجوع </button>
                        <button className='next' onClick={()=> sendToWhats()}>  ارسل الطلب على الواتساب  </button>
                    </div>
                </motion.div>
        </Modal>
        </>
    );
}
 
export default CartModalStepThree;