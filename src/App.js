import React, { useEffect, useState } from 'react';
import {BgImage, Page} from './components';
import './App.scss';
import SkeletonPage from './components/Skeleton/Skeleton';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    setLoading(false);
  })
  
  return (
    <>
    {loading && <SkeletonPage />}
    {!loading && <div  className="App">
                    <BgImage />
                    <Page />
                 </div>
    }
    </>
  );
}

export default App;
