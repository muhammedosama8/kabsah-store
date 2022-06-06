import React, { useEffect, useRef } from 'react';
import { categoriesData } from '../../data/data';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import './items.scss';
import { itemToggle } from '../../redux/reducer';


const Items = () => {
    const ref =useRef();
    const dispatch = useDispatch();

    useEffect(() => {
    })

    return (  
        <>
        <div>
            <div className='search'>
                <input type='text' placeholder=' ابحث هنا ...'/>
            </div>
            <div className="tab-pane fade show active" 
            id='pills-allCategories' 
            role="tabpanel" 
            aria-labelledby='pills-allCategories-tab'>
            {categoriesData.map((item,index) => {
               const scroll = (item.order.length*160+item.order.length*10)/2 -170;
               
               return <div key={index} className="nav-item" role="presentation">
                    <div className='item '>
                        <div className='header-item relative'>
                            <img  draggable='false' src={item.img} alt='item' />
                            <h4 className='title'>{item.title}</h4>
                            <div className='border'></div>
                            <button className="nav-link show-all"
                                id={`pills-${item.name}-tab`}
                                data-bs-toggle="pill" 
                                data-bs-target={`#pills-${item.name}` }
                                type="button" role="tab" 
                                aria-controls={`pills-${item.name} `}
                                aria-selected="true">
                                    مشاهدة الكل
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </button>
                        </div>
                        <motion.div 
                        className='carousel' 
                        ref={ref}
                        
                        whileTap={{cursor: 'grabbing'}}>
                    <motion.div className='inner-carousel'
                        drag='x'
                        dragConstraints={{left: -scroll , right: scroll}}>
                        <div className='items-div'>
                            {item.order.map((order,index) => (
                                <div key={index} onClick={() => dispatch(itemToggle())} className='order cursor'>
                                    <img  draggable='false' src={order.img} alt={order.name} />
                                    <h4 className='name'>{order.name}</h4>
                                    <div className='border'></div>
                                    <p className='price'>{order.price}
                                    <span>ج.م</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                        </motion.div>
                        </motion.div>
                    </div>
                </div>
            })}
            </div>

            
            {categoriesData.map((item) => (
                <motion.div  key={item.name}
                    animate={{ visible: { opacity: 1, x: 0 } }}
                    transition={{ delay: 1 }}>
                    <div key={item.name} className="tab-pane fade item" 
                    id={`pills-${item.name}`} 
                    role="tabpanel" 
                    aria-labelledby={`pills-${item.name}-tab`}>
                        <div className='item'>
                            <div className='header-item'>
                                <img  draggable='false' src={item.img} alt='item' />
                                <h4 className='title'>{item.title}</h4>
                                <div className='border'></div>
                            </div>
                            <div className='items-div wrap'>


                            {item.order.map((order,index) => (
                                <div className='order cursor' key={index}  onClick={() => dispatch(itemToggle())}>
                                    <img  draggable='false' src={order.img} alt={order.name} />
                                    <h4 className='name'>{order.name}</h4>
                                    <div className='border'></div>
                                    <p className='price'>{order.price}
                                    <span>ج.م</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </motion.div>
            ))}
            
        </div>
        </>
    );
}
 
export default Items;