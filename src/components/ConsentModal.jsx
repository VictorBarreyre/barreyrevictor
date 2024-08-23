import React, { useState, useEffect } from 'react';
import { useWindowContext } from '../Context';
import data from './data';

const ConsentModal = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { AreCookiesAccepted, setAreCookiesAccepted,handleConsentCookies, handleDenyCookies, language, showModal } = useWindowContext();
  const modalData = data[language].Modal;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log('Cookies accepted state changed:', AreCookiesAccepted);
  }, [AreCookiesAccepted]);


  if (!showModal) {
    console.log('Modal closed');
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='flex-window-title'> 
        <h2 className='windowh2 modalh2'>Cookies & expérience</h2>
        </div>
        <div className='modal-content-p'>
        {isMobile ? modalData.contentMobile : modalData.content}
        </div>
        <div className='center-modal-button'>
          <button className='btn-modal' onClick={handleConsentCookies}>{modalData.accept}</button>
          <button className='btn-modal' onClick={handleDenyCookies}>{modalData.refuse}</button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
