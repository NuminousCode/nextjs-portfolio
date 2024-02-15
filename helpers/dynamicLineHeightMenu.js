import { useEffect } from 'react';

// Dynamic Line Height Adjustment 
const useDynamicLineHeight = (className, fraction) => {
    useEffect(() => {
        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            let newLineHeight;

            if (viewportWidth > 1200) {
                newLineHeight = '100'; 
            } else {
                newLineHeight = 10 + (viewportWidth * fraction);
            }
            const elements = document.querySelectorAll(className);
            elements.forEach(element => {
                element.style.lineHeight = `${newLineHeight}px`;
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, [className, fraction]);
};

export default useDynamicLineHeight;
