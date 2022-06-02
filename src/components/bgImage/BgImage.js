import React from 'react';
import images from '../../assets';
import './bgImage.scss';

const BgImage = () => {
    return (  
        <>
            <div className='bg-image'>
                <img  draggable='false' src={images.bg} alt={images.bg}/>
            </div>
        </>
    );
}
 
export default BgImage;