import React, { useState } from 'react';

const ConsentModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [userConsent, setUserConsent] = useState(false);

  const handleConsent = () => {
    setUserConsent(true);
    setShowModal(false);
  };

  const handleDeny = () => {
    setUserConsent(false);
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='windowh2'>Consentement des Cookies</h2>
        <p className='centered-modal-p'>Nous utilisons des cookies pour améliorer votre expérience. Pouvons-nous continuer à utiliser vos données, y compris votre adresse IP?</p>
       <div className='center-modal-button'>
        <button className='btn-modal' onClick={handleConsent}>J'accepte</button>
        <button className='btn-modal' onClick={handleDeny}>Je refuse</button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
