import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import Desk from './components/root/Desk';
import ConsentModal from './components/ConsentModal';
import { useWindowContext } from './Context';
import NoCss from './components/NoCss';
import Loader from './components/Loader';


function App() {

  const {isCssSet, AreCookiesAccepted} = useWindowContext();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  

  return (
    isCssSet ? (
      <div className='app'>
        {!AreCookiesAccepted && <ConsentModal />}
        <Loader />
        <Router>
          <div className='flex-top-down'style={{ height: `${windowHeight}px` }}>
            <Header />
            <Routes>
          
              <Route path="/" element={<Desk />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    ) : (
      <NoCss />
    )
  );
}

export default App;