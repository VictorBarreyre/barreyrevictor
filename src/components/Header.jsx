import React, {useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Time from './Time';
import data from './data';
import { useWindowContext } from '../Context';


const Header = () => {

  const { language, AreCookiesAccepted } = useWindowContext();
  const headerData = data[language].Header;

  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState({ country: '', region: '' });
  const [fourni, setFourni] = useState('')
  

  useEffect(() => {
    fetch('https://geo.ipify.org/api/v2/country?apiKey=at_Q5XWTrAQpqxoQibgOgqvSB93fkvK9')
      .then(response => response.json())
      .then(data => {  
        setIpAddress(data.ip);
        setLocation({ country: data.location?.country, region: data.location?.region });
        setFourni(data.isp);      
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
   
        {AreCookiesAccepted && (
          
        <div className='sub-info-sup'>
               <h2 className='windowh2'>Ce que l'on sait sur vous : </h2>
        <p className='sub-p'>{data[language].Button.settings.contentIP}{ipAddress} </p>
        <p className='sub-p'>{data[language].Button.settings.contentLocation} {location.country}, {location.region} </p>
        <p className='sub-p'>{data[language].Button.settings.contentFourni} {fourni}</p>
        <p className='sub-p'>{data[language].Button.settings.contentLang} {languageNames[language]} </p>
      </div>

      )}
  </div>
  );
}

export default Header;
