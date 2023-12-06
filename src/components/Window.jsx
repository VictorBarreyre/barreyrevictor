import React, { useState, useEffect, useRef } from 'react'
import close from '../assets/cross.svg'
import shave from 'shave';
import { useWindowContext } from '../Context';



const Window = ({ windowKey }) => {


    const initialPosition = () => {
        // Assurez-vous que la fenêtre n'apparaisse pas hors de l'écran
        const maxHeight = window.innerHeight - 200; // 150 est la hauteur initiale de la fenêtre
        const maxWidth = window.innerWidth - 300; // 300 est la largeur initiale de la fenêtre

        return {
            x: Math.floor(Math.random() * Math.max(maxWidth, 1)),
            y: Math.floor(Math.random() * Math.max(maxHeight, 1))
        };
    };

    const { openWindows, windowData, toggleWindow } = useWindowContext();
    const [windowContent, setWindowContent] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(initialPosition());
    const [size, setSize] = useState({ width: 300, height: 150 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
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


    const onClick = () => {
        handleCloseClick(windowKey);
    };

    if (!openWindows[windowKey]) {
        return null;
    }

    return (
        <div className='window' onMouseDown={onStart} onMouseMove={onMove} onMouseUp={onEnd} onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd} style={{ left: `${position.x}px`, top: `${position.y}px`, width: `${size.width}px`, height: `${size.height}px`, position: 'absolute' }}>
            <div className='flex-window-title' >
                <img className='footer-img' src={windowData[windowKey]?.icon} alt={windowData[windowKey]?.title} />
                <h2 className='windowh2'>{windowData[windowKey]?.title}</h2>
                <img className='footer-img-cross' src={close} alt="Cross" onClick={onClick} />
            </div>
            <div className='flex-window-body' style={{ flex: 1 }}>
                <p ref={textRef}>{windowContent}</p>
            </div>
            <div className='resize-handle' />
        </div>
    )
}

export default Window