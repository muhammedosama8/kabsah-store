import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import images from '../../../assets'; 
import './categories.scss';
import { categoriesData } from '../../data/data';



const Categories = () => {
    const ref =useRef();
    const scroll = ((categoriesData.length+1)*62);

    return ( 
    <> 
    <div className='categories-div'> 
        <div className='title px-3'>
                <img  draggable='false' src={images.categories} alt ='categories' />
                <h4>تسوق حسب القسم</h4>
        </div>
        <div className='categories'>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <motion.div 
                className='carousel' 
                ref={ref}
                    whileTap={{cursor: 'grabbing'}}>
                    <motion.div className='inner-carousel'
                        drag='x'
                        dragConstraints={{left:-10, right:scroll }}>

                        <li className="nav-item " role="presentation"
                        >
                                <button className="nav-link active" 
                                style={{background: `linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0.4) 100%,#000 100%), url(${images.categoryImg1})` , backgroundSize: 'cover'}}
                                id='pills-allCategories-tab'
                                data-bs-toggle="pill" 
                                data-bs-target='#pills-allCategories'
                                type="button" role="tab" 
                                aria-controls='pills-allCategories'
                                aria-selected="true">
                                <h4>
                                    جميع الفئات
                                </h4>
                                </button>
                        </li>
                        
                        {categoriesData.map((item,index) => (
                            <li key={index} className="nav-item" role="presentation">
                                <button className="nav-link" 
                                style={{background: `linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 20%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0.4) 100%,#000 100%), url(${item.img})` , backgroundSize: 'cover'}}
                                id={`pills-${item.name}-tab`}
                                data-bs-toggle="pill" 
                                data-bs-target={`#pills-${item.name}` }
                                type="button" role="tab" 
                                aria-controls={`pills-${item.name} `}
                                aria-selected="true">
                                <h4>
                                    {item.title}
                                </h4>
                                </button>
                            </li>
    ))}

                    </motion.div>
                </motion.div>
            </ul>
        </div>
    </div>
    </>
     );
}
 
export default Categories;