import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.scss';


const SkeletonPage = () => {
    return(
        <div className='skeleton'>
            <Skeleton duration={1} height={'100vh'} count={1} width={'72.5%'} />
            <Skeleton duration={1} height={100} count={7} />
        </div>
    )
}
export default SkeletonPage;