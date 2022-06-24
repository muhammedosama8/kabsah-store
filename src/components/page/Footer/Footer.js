import React from 'react';
import { useDispatch } from 'react-redux';
import images from '../../../assets'
import { contactToggle } from '../../redux/reducer';
import './footer.scss';

const Footer = () => {
    const dispatch = useDispatch();
    const toTop = ()=> document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' })

    return ( 
        <>
        <div className='footer'>
            <div className='footer-image'>
                <img  draggable='false' src={images.bg} alt='footer' />
            </div>
            <p className='footer-text'>
المشويات و الأكل الخليجي والسعودي والولائم والعزائم والأرز الخليجي بأنواعه والمشويات
            </p>
            <p className='footer-copyright'>
                Copyright © 
                  <a href='https://muhammed-portfolio.vercel.app/'>Muhammed Osama</a>
                <span>2022</span>
                 All Rights Reserved.
            </p>
            <div className='footer-links'>
                <button onClick={()=> dispatch(contactToggle())}>سياسة خاصة</button>
                <button  onClick={()=> dispatch(contactToggle())}>الأحكام والشروط </button>
                <button onClick={()=> toTop()}> العودة إلى الأعلى </button>
            </div>
        </div>
        </>
     );
}
 
export default Footer;