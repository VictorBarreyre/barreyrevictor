import React, { useState,useEffect,useRef } from 'react'
import close from '../assets/cross.svg'
import shave from 'shave';
import { useWindowContext } from '../Context';



const Window = ({windowKey}) => {


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

    
    const textRef = useRef(null);
    const titleHeight = 50;

   
    useEffect(() => {
        // Mettre à jour le contenu de la fenêtre à partir des données du contexte
        if (windowData[windowKey]) {
            setWindowContent(windowData[windowKey].content);
        }
    }, [windowData, windowKey]);

    
    const handleCloseClick = () => {
        toggleWindow(windowKey); 
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
    
    
    
    const onClick = () => {
        handleCloseClick(windowKey);
    };
    
    if (!openWindows[windowKey]) {
        return null;
    }
   
    return (
        <div className='window' onMouseDown={onMouseDown} style={{ left: `${position.x}px`, top: `${position.y}px`, width: `${size.width}px`, height: `${size.height}px`, position: 'absolute' }}>
            <div className='flex-window-title' onMouseDown={onMouseDown}>
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