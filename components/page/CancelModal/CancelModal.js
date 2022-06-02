import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { cancelToggle } from '../../redux/reducer';
import './cancelModal.scss';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


const CancelModal = () => {
    const cancel = useSelector(state => state.modal.cancel);
    const dispatch = useDispatch();

    useEffect(()=>{
        Modal.setAppElement('body');
    })
    const customStyles = {
        content: {
            background: 'none',
            border: 'none',
            width: '350px',
            overflow: 'hidden',
            height: '455px',
            padding: '0',
            marginRight: 'calc(100% - 404px)',
            top: '25%'
        },
      };
    return (  
        <>
        <Modal
            isOpen={cancel}
            onRequestClose={() => dispatch(cancelToggle())}
            contentLabel="Example Modal"
            style={customStyles} 
            >
            <motion.div
            whileInView={{ opacity: [0, 1]}}
            transition={{duration: .5}}
            className='cancel-modal'
            >
                <button onClick={() => dispatch(cancelToggle())} className='close-modal'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className='modal-title'>
                    <h4 className='title'>إلغاء الطلب</h4>
                    <p className='sub-title'>قم بادخال البيانات لالغاء الطلب</p>
                </div>
                <div className='modal-form'>
                    <form>
                        <div className='input-style'>
                            <input type='text' placeholder='رقم الطلب' />
                            <label>رقم الطلب</label>
                            <em className='em-req'>(مطلوب)</em>
                        </div>
                        <div className='input-style'>
                            <input type='text' placeholder='ادخل رقم التليفون ' />
                            <label>هاتفك </label>
                            <em className='em-req'>(مطلوب)</em>
                        </div>
                        <div className='input-style'>
                            <textarea placeholder='سبب الإلغاء ' />
                            <label>سبب الإلغاء </label>
                            <em className='em-req'>(مطلوب)</em>
                        </div>
                        <input type='submit' className='cancle-btn' value='الغاء الطلب'/>
                    </form>
                </div>
                </motion.div>
            </Modal>
        </>
    );
}
 
export default CancelModal;