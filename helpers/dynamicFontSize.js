import { useEffect } from 'react';

// Dynamic Font Size Resizer 
const useDynamicFontSize = (className, minFontSize, maxFontSize, scaleFactor) => {
    useEffect(() => {
        const adjustFontSize = () => {
            const viewportWidth = window.innerWidth;
            let newFontSize = viewportWidth * scaleFactor;
            newFontSize = Math.max(Math.min(newFontSize, maxFontSize), minFontSize);
            const elements = document.querySelectorAll(className);
            elements.forEach(element => {
                element.style.fontSize = `${newFontSize}px`;
            });
        };

        window.addEventListener('resize', adjustFontSize);
        adjustFontSize(); // Initialize on load

        return () => window.removeEventListener('resize', adjustFontSize);
    }, [className, minFontSize, maxFontSize, scaleFactor]);
};

export default useDynamicFontSize;
