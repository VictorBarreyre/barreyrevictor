import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [textElements, setTextElements] = useState([]);

    useEffect(() => {
        const elements = [];
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const textWidth = 25;
        const textHeight = 25;

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
            {textElements.map(el => (
                <span
                    key={el.id}
                    data-id={el.id}
                    className={`bv-text ${el.hidden ? 'hidden' : ''}`}
                    style={el.style}
                    onMouseOver={() => handleInteraction(el.id)}
                >
                    BV/
                </span>
            ))}
        </div>
    );
};

export default Loader;
