import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import Desk from './components/root/Desk';
import ConsentModal from './components/ConsentModal';
import { useWindowContext } from './Context';
import NoCss from './components/NoCss';


function App() {

  const {isCssSet} = useWindowContext();
  const [consentGiven, setConsentGiven] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyer l'event listener quand le composant est démonté ou redimensionné
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
    const consent = localStorage.getItem('userConsent');
    setConsentGiven(consent === 'true');
  }, []);

  const handleConsentChange = (consent) => {
    localStorage.setItem('userConsent', consent);
    setConsentGiven(consent);
  };

  

  return (
    isCssSet ? (
      <div className='app'>
        {!consentGiven && <ConsentModal onConsentChange={handleConsentChange} />}
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