import React, { useState, useEffect } from 'react';
import { useWindowContext } from '../Context';
import data from './data';


const ConsentModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const {AreCookiesAccepted, setAreCookiesAccepted, language} = useWindowContext();
  const modalData = data[language].Modal;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      console.log(isMobile)
      console.log(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleConsent = () => {
    setAreCookiesAccepted(true);
    setShowModal(false);
console.log(AreCookiesAccepted)
  };
  
  const handleDeny = () => {
    setAreCookiesAccepted(false);
    setShowModal(false);
    console.log(AreCookiesAccepted)
  };
  
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='windowh2 modalh2'>Cookies</h2>
        {isMobile? modalData.contentMobile : modalData.content}
       <div className='center-modal-button'>
        <button className='btn-modal' onClick={handleConsent}>{modalData.accept}</button>
        <button className='btn-modal' onClick={handleDeny}>{modalData.refuse}</button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
