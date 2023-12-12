import React, { useState, createContext, useContext,useEffect } from 'react';
import data from './components/data';

const WindowContext = createContext();


export const WindowProvider = ({ children }) => {

  const [openWindows, setOpenWindows] = useState({});
  const [windowData, setWindowData] = useState({});
  const [language, setLanguage] = useState('fr');
  const [isDarkMode, setIsDarkmode] = useState(false)
  const [isCssSet, setIsCSSSet] = useState(true)
  const [AreCookiesAccepted, setAreCookiesAccepted] = useState(
    localStorage.getItem('userConsent') === 'true'
  );
  

  const toggleWindow = (windowKey) => {
    setOpenWindows(prevWindows => ({
      ...prevWindows,
      [windowKey]: !prevWindows[windowKey]

    }));

  };

  const setWindowContent = (windowKey, data) => {
    setWindowData(prevData => ({
      ...prevData,
      [windowKey]: data
    }));

  };


  const changeLanguage = (language) => {
    setLanguage(language);
    const buttonData = data[language].Button;
    setWindowData(buttonData);
  };

  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkMode)
  }

  const toggleCookies = () => {
    setAreCookiesAccepted(!AreCookiesAccepted)
    console.log(AreCookiesAccepted)
  }

  const switchCss = () => {
    setIsCSSSet(!isCssSet)
  }


  useEffect(() => {
    localStorage.setItem('userConsent', AreCookiesAccepted);
  }, [AreCookiesAccepted]);
  

  return (
    <WindowContext.Provider value={{
      openWindows,
      toggleWindow,
      windowData,
      setWindowContent,
      language,
      changeLanguage,
      isDarkMode,
      toggleDarkMode,
      setAreCookiesAccepted,
      AreCookiesAccepted,
      toggleCookies,
      isCssSet,
      switchCss
    }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => useContext(WindowContext);