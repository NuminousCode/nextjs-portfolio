import { useEffect } from 'react';

// Dynamic Top Margin Adjustment
const useDynamicMargin = (className, fraction1) => {
    useEffect(() => {

        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            let newMargin;
            if (viewportWidth > 750) {
                newMargin = (viewportWidth * fraction1);
            } 
            const elements = document.querySelectorAll(className);

            elements.forEach(element => {
                element.style.marginTop = `${newMargin}px`;
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, [className, fraction1]);
};

export default useDynamicMargin;
