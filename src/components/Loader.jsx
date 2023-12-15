import React, { useState, useEffect } from 'react';
import { useWindowContext } from '../Context';
import ConsentModal from './ConsentModal';

const Loader = () => {
    const [textElements, setTextElements] = useState([]);
    const {AreCookiesAccepted} = useWindowContext();


    useEffect(() => {
        const elements = [];
        const screenWidth = window.innerWidth +100;
        const screenHeight = window.innerHeight +100;
        const textWidth = 20;
        const textHeight = 20;

        const columns = Math.floor(screenWidth / textWidth);
        const rows = Math.floor(screenHeight / textHeight);

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                elements.push({
                    id: `${y}-${x}`,
                    style: {
                        left: `${x * textWidth}px`,
                        top: `${y * textHeight}px`
                    }
                });
            }
        }
        setTextElements(elements);
    }, []);

    const handleInteraction = (id) => {
        setTextElements(prevElements =>
            prevElements.map(el => (el.id === id ? { ...el, hidden: true } : el))
        );
    };

    return (
        <> 
        <ConsentModal/> 
        <div
            className="text-container-loader"
            onTouchMove={(event) => {
                const touch = event.touches[0];
                const x = touch.clientX;
                const y = touch.clientY;
                const touchedElement = document.elementFromPoint(x, y);
                if (touchedElement && touchedElement.dataset.id) {
                    handleInteraction(touchedElement.dataset.id);
                }
            }}
        >
            <div className="text-container-behind"> 
            {textElements.map(el => (
                <span
                    key={el.id}
                    data-id={el.id}
                    className={`bv-text ${el.hidden ? 'hidden' : ''}`}
                    style={el.style}
                    onMouseOver={() => handleInteraction(el.id)}
                >
                    bv/
                </span>
            ))}
            </div>
        </div>

        
        </>
    );
};

export default Loader;