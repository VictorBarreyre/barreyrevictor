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


    const { openWindows,
        windowData,
        toggleWindow,
        changeLanguage,
        isDarkMode,
        toggleDarkMode,
        AreCookiesAccepted,
        toggleCookies,
        isCssSet,
        switchCss } = useWindowContext();
    const [windowContent, setWindowContent] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(initialPosition());
    const [size, setSize] = useState({ width: 300, height: 150 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
    const [language, setLanguage] = useState(windowData[windowKey]?.language);
    let highestZIndex = 10;

    const darkmodeValue = !isDarkMode ? windowData[windowKey]?.contentDarkmode : windowData[windowKey]?.contentClearmode;
    const cookieValue = AreCookiesAccepted ? windowData[windowKey]?.contentCookies : windowData[windowKey]?.contentNoCookies;
    const cssValue = isCssSet ? windowData[windowKey]?.contentCSS : windowData[windowKey]?.contentNoCSS;

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

    const getEventCoordinates = (e) => {
        // Vérifie si l'événement est tactile
        if (e.touches) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else {
            return { x: e.clientX, y: e.clientY };
        }
    };



    const onStart = (e) => {
        const { x, y } = getEventCoordinates(e);

        if (e.target.className.includes('resize-handle')) {
            // Démarre le redimensionnement
            setResizeStart({ x, y });
            setIsResizing(true);
        } else {
            // Démarre le déplacement
            setDragStart({
                x: x - position.x,
                y: y - position.y
            });
            setIsDragging(true);

            resetAllWindowsZIndex();

            const currentWindow = e.currentTarget;
            setZIndexForWindow(currentWindow, highestZIndex);

            highestZIndex++;
        }
    };

    const onMove = (e) => {
        const { x, y } = getEventCoordinates(e);

        if (isDragging) {
            setPosition({
                x: x - dragStart.x,
                y: y - dragStart.y
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

    const onEnd = () => {
        setIsDragging(false);
        setIsResizing(false);
    };


    useEffect(() => {
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onEnd);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onEnd);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onEnd);
        };
    }, [onMove, onEnd]);

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
        <div className='window' 
        onMouseDown={onStart} 
        onMouseMove={onMove} 
        onMouseUp={onEnd} 
        onTouchStart={onStart} 
        onTouchMove={onMove} 
        onTouchEnd={onEnd} 
        style={{ left: `${position.x}px`, top: `${position.y}px`, width: `${size.width}px`, height: `${size.height}px`, position: 'absolute', zIndex: openWindows[windowKey]?.zIndex || 1 }}>
            <div className='flex-window-title' >
                <img className='win-img' src={windowData[windowKey]?.icon} alt={windowData[windowKey]?.title} />
                <h2 className='windowh2'>{windowData[windowKey]?.title}</h2>
                <img className='footer-img-cross' src={close} alt="Cross" onClick={handleCloseClick} />
            </div>
            <div className='flex-window-body' style={{ flex: 1 }}>
                <div className='flex-settings-content'>
                
                    <div className='flex-settings lang'>
                        <select value={language} onChange={handleLanguageChange}>
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                            <option value="jp">日本語 (Japonais)</option>
                            <option value="ru">Русский (Russe)</option>
                            <option value="cn">中文 (Chinois)</option>
                        </select>
                    </div>
                    <div className='flex-settings darkmode'>
                        <p className='setting-p'>{darkmodeValue} </p>
                        <label className="switch">
                            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className='flex-settings cookies'>
                        <p className='setting-p'>{cookieValue} </p>
                        <label className="switch">
                            <input type="checkbox" checked={AreCookiesAccepted} onChange={toggleCookies} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className='flex-settings css'>
                        <p className='setting-p'>{cssValue} </p>
                        <label className="switch">
                            <input type="checkbox" checked={isCssSet} onChange={switchCss} />
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