import React from 'react';
import { NavLink } from 'react-router-dom';
import Time from './Time';
import data from './data';
import { useWindowContext } from '../Context';


const Header = () => {

  const { language } = useWindowContext();
  const headerData = data[language].Header;

  return (
    <div className="flex-up">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}> {headerData.title}</NavLink>   
        <Time/>
        <NavLink to="/google" activeClassName="active-link">{headerData.go}</NavLink>      

    </div>
  );
}

export default Header;
