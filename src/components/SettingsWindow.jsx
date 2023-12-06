import React, { useState, useEffect, useRef } from 'react'
import close from '../assets/cross.svg'
import shave from 'shave';
import { useWindowContext } from '../Context';

const SettingsWindow = ({ windowKey }) => {

    const initialPosition = () => {

        const maxHeight = window.innerHeight - 200;
        const maxWidth = window.innerWidth - 300;
        return {
            x: Math.floor(Math.random() * Math.max(maxWidth, 1)),
            y: Math.floor(Math.random() * Math.max(maxHeight, 1))
        };
    };


    const { openWindows, windowData, toggleWindow, changeLanguage, isDarkMode, toggleDarkMode, AreCookiesAccepted,
        toggleCookies } = useWindowContext();
    const [windowContent, setWindowContent] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(initialPosition());
    const [size, setSize] = useState({ width: 300, height: 150 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
    const [language, setLanguage] = useState(windowData[windowKey]?.language);
    let highestZIndex = 10;

    const textRef = useRef(null);
    const titleHeight = 50;

    useEffect(() => {
        if (windowData[windowKey]) {
            setWindowContent(windowData[windowKey].content);
        }
    }, [windowData, windowKey]);


    const handleCloseClick = () => {
        toggleWindow(windowKey);
    };


    const resetAllWindowsZIndex = () => {
        const allWindows = document.querySelectorAll('.window');
        allWindows.forEach(window => {
            window.style.zIndex = 1;
        });
    };

    const setZIndexForWindow = (windowElement, zIndex) => {
        windowElement.style.zIndex = zIndex;
    };

    const onMouseDown = (e) => {
        if (e.target.className.includes('resize-handle')) {
            // Démarre le redimensionnement
            setResizeStart({ x: e.clientX, y: e.clientY });
            setIsResizing(true);
        } else {
            // Démarre le déplacement
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
            setIsDragging(true);

            resetAllWindowsZIndex();

            const currentWindow = e.currentTarget; // ou une autre méthode pour obtenir l'élément de fenêtre actuel
            setZIndexForWindow(currentWindow, highestZIndex);

            highestZIndex++;
        }
    };

    const onMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        } else if (isResizing) {
            // Calculez la nouvelle taille en fonction de la position initiale et du déplacement de la souris
            setSize({
                width: Math.max(100, size.width + (e.clientX - resizeStart.x)),
                height: Math.max(100, size.height + (e.clientY - resizeStart.y))
            });
            setResizeStart({ x: e.clientX, y: e.clientY });
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
    };


    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        // Nettoyage de l'effet
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [onMouseMove, onMouseUp]);

    useEffect(() => {
        if (textRef.current) {
            const textHeight = size.height - titleHeight;
            shave(textRef.current, textHeight);
        }
    }, [size, titleHeight]);


    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        changeLanguage(selectedLanguage);
    };


    if (!openWindows[windowKey]) {
        return null;
    }



    return (
        <div className='window' onMouseDown={onMouseDown} style={{ left: `${position.x}px`, top: `${position.y}px`, width: `${size.width}px`, height: `${size.height}px`, position: 'absolute' }}>
            <div className='flex-window-title' onMouseDown={onMouseDown}>
                <img className='footer-img' src={windowData[windowKey]?.icon} alt={windowData[windowKey]?.title} />
                <h2 className='windowh2'>{windowData[windowKey]?.title}</h2>
                <img className='footer-img-cross' src={close} alt="Cross" onClick={handleCloseClick} />
            </div>

            <div className='flex-window-body' style={{ flex: 1 }}>

                <div className='flex-settings-content'>
                    <div className='flex-settings ip'>
                        <p className='setting-p'>Votre Adresse Ip est : 124.1983.45.98 </p>
                    </div>
                    <div className='flex-settings language'>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="jp">日本語 (Japonais)</option>
                        <option value="ru">Русский (Russe)</option>
                        <option value="cn">中文 (Chinois)</option>
                    </select>
                    </div>
                    <div className='flex-settings darkmode'>
                        <p className='setting-p'>{windowData[windowKey]?.contentDarkmode} </p>
                        <label className="switch">
                            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className='flex-settings cookies'>
                        <p className='setting-p'>{windowData[windowKey]?.contentCookies} </p>
                        <label className="switch">
                            <input type="checkbox" checked={AreCookiesAccepted} onChange={toggleCookies} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='resize-handle' />
        </div>
    )
}

export default SettingsWindow;