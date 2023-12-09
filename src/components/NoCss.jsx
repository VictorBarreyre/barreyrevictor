import React from 'react';
import { useWindowContext } from '../Context';
import data from './data';

const NoCss = () => {
    const { language,handleLanguageChange,isCssSet,switchCss } = useWindowContext();
    const currentData = data[language];
    const settingsData = currentData.Button.settings;

    console.log(settingsData)
    
    return (
        <div className='nocss'>
            <div className='content-nocss'>
                <h1>{currentData.Header.title}</h1>
                {Object.entries(currentData.Button).map(([key, value]) => {
                    if (key === 'settings') {
                        return null;
                    }
                    return (
                        <div key={key}>
                            <h2>{value.title}</h2>
                            <p>{value.content}</p>
                        </div>
                    );
                })}
                 <div key='settings'>
                    
                    <h2>{settingsData.title}</h2>
                    <p>{settingsData.contentIP}</p>
                    <div >
                        <select value={language} onChange={handleLanguageChange}>
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                            <option value="jp">日本語 (Japonais)</option>
                            <option value="ru">Русский (Russe)</option>
                            <option value="cn">中文 (Chinois)</option>
                        </select>
                    </div>
                    <p>{settingsData.contentDarkmode}</p>
                    <p>{settingsData.contentCookies}</p>
                    <div className='flex-settings css'>
                    <p>{settingsData.contentCSS}</p>
                    <label>
                            <input type="checkbox" checked={isCssSet} onChange={switchCss} />
                            <span></span>
                        </label>
                   </div>
                </div>
            </div>
    
        </div>
    );
};

export default NoCss;
