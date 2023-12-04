import React, { useState, createContext, useContext } from 'react';
import data from './components/data';

const WindowContext = createContext();


export const WindowProvider = ({ children }) => {
  const [openWindows, setOpenWindows] = useState({});
  const [windowData, setWindowData] = useState({});
  const [language, setLanguage] = useState('fr');

  const toggleWindow = (windowKey) => {
    setOpenWindows(prevWindows => ({
      ...prevWindows,
      [windowKey]: !prevWindows[windowKey]

    }));
    console.log(windowKey)
  };

  const setWindowContent = (windowKey, data) => {
    setWindowData(prevData => ({
      ...prevData,
      [windowKey]: data
    }));

  };

  const changeLanguage = (language) => {
    setLanguage(language);
  
  };

  


  return (
    <WindowContext.Provider value={{ openWindows, toggleWindow, windowData, setWindowContent, language, changeLanguage }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => useContext(WindowContext);