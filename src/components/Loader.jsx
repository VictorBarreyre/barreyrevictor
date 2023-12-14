import React, { useState, useEffect } from 'react';


const Loader = () => {
    const [textElements, setTextElements] = useState([]);

    useEffect(() => {
        const elements = [];
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const textWidth = 25; // Largeur approximative de chaque élément de texte
        const textHeight = 25; // Hauteur approximative de chaque élément de texte

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

    const handleTouchMove = (event) => {
        const touches = event.touches[0];
        if (touches) {
            textElements.forEach((el, index) => {
                const domNode = document.elementFromPoint(touches.clientX, touches.clientY);
                if (domNode && domNode.key === `bv-text ${index}`) {
                    setTextElements(prevElements =>
                        prevElements.map((el, idx) => (idx === index ? { ...el, hidden: true } : el))
                    );
                }
            });
        }
    };

    const handleMouseOver = (id) => {
        setTextElements(prevElements =>
            prevElements.map(el => (el.id === id ? { ...el, hidden: true } : el))
        );
    };

    return (
        <div className="text-container-loader">
            {textElements.map(el => (
                <span
                    key={el.id}
                    className={`bv-text ${el.hidden ? 'hidden' : ''}`}
                    style={el.style}
                    onMouseOver={() => handleMouseOver(el.id)}
                    onTouchMove={handleTouchMove}
                >
                    BV/
                </span>
            ))}
        </div>
    );
};

export default Loader;

