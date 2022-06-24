import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { contactToggle } from '../../redux/reducer';
import './contactModal.scss';
import { faTimes, faArrowDown, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import images from '../../../assets';


const ContactModal = () => {
    const contact = useSelector(state => state.modal.contact);
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
            position: 'initial',
            marginTop: '18%',
        },
      };
    return (  
        <>
        <Modal
            isOpen={contact}
            onRequestClose={() => dispatch(contactToggle())}
            contentLabel="Example Modal"
            style={customStyles} 
            >
            <motion.div
            whileInView={{ opacity: [0, 1]}}
            transition={{duration: .5}}
            className='contact-modal'
            >
                <button onClick={() => dispatch(contactToggle())} className='close-modal'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className='cart-center'>
                    <img  draggable='false' src={images.bg} alt='photo'/>
                    <p className='title'>المشويات والأكل الخليجي والسعودي والولائم والعزائم والأرز الخليجي بأنواعه والمشويات</p>
                    <p className='subtitle'>قم بالتمرير لأسفل للحصول على مزيد من تفاصيل الاتصال</p>
                    <motion.div
                    animate={{ y: [50,0], scale: (.8,1.4) }}
                    transition={{duration: 1}}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                    </motion.div>
                </div>
                <div className='address'>
                    <h2>العنوان</h2>
                    <p>شارع سعيد مع الجلاء طنطا، محافظة الغربية، مصر</p>
                    
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54841.09140508061!2d31.001174!3d30.786696000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa64962ffbea1e33c!2zMzDCsDQ3JzEyLjEiTiAzMcKwMDAnMDQuMiJF!5e0!3m2!1sen!2sus!4v1654092213294!5m2!1sen!2sus" width="300" height="150" allowfullscreen="" 
                    className='location' referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className='divider'></div>
                </div>
                <div className='buttons'>
                    <a href='tel:+2012345123421' className='call'>                        
                       
                    اتصل الآن +2012345123421
                    <div><FontAwesomeIcon icon={faPhone} /></div>
                    </a>
                      <button onClick={() => dispatch(contactToggle())}  className='close'>
                    إغلاق</button>
                </div>
                </motion.div>
            </Modal>
        </>
    );
}
 
export default ContactModal;