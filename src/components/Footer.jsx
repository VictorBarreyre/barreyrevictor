import React from 'react';
import { useWindowContext } from '../Context';
import data from './data.jsx';


const Footer = () => {

  const { openWindows, toggleWindow, setWindowContent, language } = useWindowContext();
  const Button = data[language] ? data[language].Button : {};

  const handleButtonClick = (windowKey) => {
    setWindowContent(windowKey, Button[windowKey]);
    toggleWindow(windowKey);
  };

  const languageNames = {
    fr: 'Français',
    en: 'English',
    jp: '日本語 (Japonais)',
    ru: 'Русский (Russe)',
    cn: '中文 (Chinois)'
  };



  return (
    <div className='info-sup'>
      <div className='sub-info-sub'>
        <p className='sub-p-down'>{data[language].Quote.design}</p>
      </div>
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

    </div>
  );
};

export default Footer;
