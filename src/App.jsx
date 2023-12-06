import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import Desk from './components/root/Desk';
import ConsentModal from './components/ConsentModal';

function App() {

  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('userConsent');
    setConsentGiven(consent === 'true');
  }, []);

  const handleConsentChange = (consent) => {
    localStorage.setItem('userConsent', consent);
    setConsentGiven(consent);
  };


  return (
    <div className='app'>
       {!consentGiven && <ConsentModal onConsentChange={handleConsentChange} />}
      <Router>
        <div className='flex-top-down'>
          <Header />
          <Routes>
          <Route path="/" element={<Desk />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
