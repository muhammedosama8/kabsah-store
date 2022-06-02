/* import images from './assets'; */

import {BgImage, Page} from './components';
import './App.scss';
import { useEffect, useState } from 'react';
import SkeletonPage from './components/Skeleton/Skeleton';

function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    } ,2000)
  },[])
  
  return (
      <div>
      {loading && <SkeletonPage />}
        {!loading && <div  className="App">
              <BgImage />
              <Page />
          </div>}
      </div>
  );
}

export default App;
