import React from 'react'
import Window from '../Window';
import data from '../data.js'
import SettingsWindow from '../SettingsWindow.jsx';
import { useWindowContext } from '../../Context.jsx';


const Desk = () => {

  const { language } = useWindowContext();
  const windows = data[language].Button

    return (
      <>
        {Object.keys(windows).map(key => (
         key === 'settings' ? <SettingsWindow key={key} windowKey={key} language={language}  /> : <Window key={key} windowKey={key} />
        ))}
      </>
    );
}

export default Desk;