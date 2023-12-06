import React, { useState, useEffect, useContext } from 'react';
import { useWindowContext } from '../Context';

function Time() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const { language } = useWindowContext();

  useEffect(() => {

    const handleResize = () => {
      setCurrentDateTime(new Date()); // Force le re-rendu
    };
  
    window.addEventListener('resize', handleResize);

    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {

    const fullOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const mobileOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const options = window.innerWidth <= 768 ? mobileOptions : fullOptions; 

    let locale;

    switch (language) {
      case 'fr':
        locale = 'fr-FR';
        break;
      case 'en':
        locale = 'en-US';
        break;
      case 'jp':
        locale = 'ja-JP';
        break;
      case 'ru':
        locale = 'ru-RU';
        break;
      case 'cn':
        locale = 'zh-CN';
        break;
      default:
        locale = 'en-US';
    }

    return date.toLocaleString(locale, options);
  }

  return (
    <div className='time'>
      {formatDate(currentDateTime)}
    </div>
  );
}

export default Time;
