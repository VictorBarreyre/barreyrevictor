import React, { useState } from 'react';
import { useWindowContext } from '../Context';
import data from './data';


const ConsentModal = () => {
  const [showModal, setShowModal] = useState(true);
  const {AreCookiesAccepted, setAreCookiesAccepted, language} = useWindowContext();
  const modalData = data[language].Modal;
  
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
        {modalData.content}
       <div className='center-modal-button'>
        <button className='btn-modal' onClick={handleConsent}>{modalData.accept}</button>
        <button className='btn-modal' onClick={handleDeny}>{modalData.refuse}</button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
