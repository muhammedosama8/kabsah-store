import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector} from 'react-redux';
import { decreseQunt, increseQunt, itemToggle } from '../../redux/reducer';
import { faTimes, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import './item.scss';
import { addItem } from '../../redux/cartReducer';

const ItemModal = () => {
    const item = useSelector(state => state.modal.item);
    const itemSelected = useSelector(state => state.cart.itemSelected);
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
            position: 'initial',
            marginTop: '10%'
        },
      };
    return (  
        <>
        <Modal
            isOpen={item}
            onRequestClose={() => dispatch(itemToggle())}
            contentLabel="Example Modal"
            style={customStyles} >
            <motion.div
            whileInView={{y:[50, 0], opacity: [0, 1]}}
            transition={{duration: .5}}
            className='item-modal'
            >
                <button onClick={() => dispatch(itemToggle())} className='close-modal'>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className='item-img'>
                    <img  draggable='false' src={itemSelected.img} alt='item' />
                </div>
                <div className='info'>
                    <h2 className='title'>{itemSelected.name}</h2>
                    <h3 className='price d-flex'>{itemSelected.price}<p>ج.م</p></h3>
                </div>
                <div className='content'>
                    <p>الوصف</p>
                    <p className='description'>{itemSelected.description}</p>
                </div>
                <div className='quantity'>
                    <button onClick={()=> dispatch(increseQunt())}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    {quantity}
                    <button onClick={()=> dispatch(decreseQunt())}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
                <div className='addCart'>
                    <button onClick={
                        ()=>{dispatch(addItem({name:itemSelected.name ,quantity ,price:itemSelected.price, img:itemSelected.img}))
                              dispatch(itemToggle())
                            }}>
                            أضف إلى عربة التسوق
                            </button>
                </div>
                </motion.div>
            </Modal>
        </>
    );
}
 
export default ItemModal;