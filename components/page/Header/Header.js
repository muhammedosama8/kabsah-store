import React from 'react';
import { useDispatch } from 'react-redux';
import {downloadToggle} from '../../redux/reducer';
import images from '../../../assets';
import './header.scss';

const Header = () => {
    const dispatch = useDispatch()
    return ( 
        <>
            <div className='header' id='header'>
                <div className='cover'>
                    <img  draggable='false' src={images.bg} alt={images.bg} />
                </div>
                <div className='shadow'></div>
                <div className='profile'>
                    <img  draggable='false' src={images.profile} alt={images.profile} />
                </div>
                <div className='title'>
                    <h1>kabsah</h1>
                    <h5>المشويات و الأكل الخليجي والسعودي والولائم والعزائم والأرز الخليجي بأنواعه والمشويات</h5>
                </div>
                <div className='download-lang'>
                    <div className='lang'>
                          <a >
                            <img  draggable='false' src={images.egypt} alt={images.egypt} />
                            عربي
                        </a>

                    </div>
                    <div className='download'>
                          <a onClick={() => dispatch(downloadToggle())}>
                            <img  draggable='false' src={images.download} alt={images.download} />
                            تحميل التطبيق
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;