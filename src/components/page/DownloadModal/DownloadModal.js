import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { downloadToggle } from '../../redux/reducer';
import './downloadModal.scss';
import { motion } from 'framer-motion';
import images from '../../../assets';


const DownloadModal = () => {
    const download = useSelector(state => state.modal.download);
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
            marginTop: '5%',
        },
      };
    return (  
        <>
        <Modal
            isOpen={download}
            onRequestClose={() => dispatch(downloadToggle())}
            contentLabel="Example Modal"
            style={customStyles} 
            >
            <motion.div
            whileInView={{y:[50, 0], opacity: [0, 1]}}
            transition={{duration: .5}}
            className='download-modal'
            >
                <div>
                    <img src={images.bg} alt='img' />
                    <h3>أضف kabsah على شاشتك الرئيسية
                    </h3>
                    <p>أضف kabsah على شاشتك الرئيسية ، وادخل إليها تمامًا مثل أي تطبيق عادي. هو حقا بهذه البساطة!</p>
                    <button className='download' >أضف إلى الشاشة الرئيسية</button>
                    <button onClick={() => dispatch(downloadToggle())} className='later'>
                    ربما في وقت لاحق    
                    </button>
                </div>
                
                </motion.div>
            </Modal>
        </>
    );
}
 
export default DownloadModal;