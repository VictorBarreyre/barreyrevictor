import React from 'react';
import { useWindowContext } from '../Context';
import data from './data.js';


const Footer = () => {

  const { openWindows, toggleWindow, setWindowContent, language } = useWindowContext();
  const Button = data[language] ? data[language].Button : {};

  const handleButtonClick = (windowKey) => {
    setWindowContent(windowKey, Button[windowKey]);
    toggleWindow(windowKey);
  };

    
  return (
    
      <div className='flex-down-left'>
        {Object.keys(Button).map((id) => (
          <button
            key={id}
            className={`left-down ${openWindows[id] ? 'active' : ''}`}
            onClick={() => handleButtonClick(id)}
          >
            <img className='footer-img' src={Button[id].icon} alt={Button[id].title} />
            {Button[id].title}
          </button>
        ))}
      </div>
 
  );
};

export default Footer;
