import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonPage = () => {
    return(
        <section>
            <div>
                <Skeleton height={150} width={'100%'} />
            </div>
            <div>
                <Skeleton duration={.5} height={50} width={'100%'} />
            </div>
        </section>
    )
}
export default SkeletonPage;