import React, {useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Time from './Time';
import data from './data';
import { useWindowContext } from '../Context';


const Header = () => {

  const { language } = useWindowContext();
  const headerData = data[language].Header;

  const [ipAddress, setIpAddress] = useState('');
  

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {  
        setIpAddress(data.ip);
      })
      .catch(error => console.error('Erreur lors de la récupération de l’adresse IP:', error));
  }, []);

  const languageNames = {
    fr: 'Français',
    en: 'English',
    jp: '日本語 (Japonais)',
    ru: 'Русский (Russe)',
    cn: '中文 (Chinois)'
  };


  return (
 
    <div className='info-sup'>
     
    <div className="flex-up">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}> {headerData.title}</NavLink>   
        <Time/>
        <NavLink to="/google" activeClassName="active-link">{headerData.go}</NavLink>      
        </div>
        <div className='sub-info-sup'>
        <p className='sub-p'>{data[language].Button.settings.contentIP}{ipAddress} </p>
        <p className='sub-p'>{data[language].Button.settings.contentLang} {languageNames[language]} </p>
      </div>
  </div>
  );
}

export default Header;
