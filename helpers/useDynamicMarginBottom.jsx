import { useEffect } from 'react';

// Dynamic Margin Adjustment 
const useDynamicMarginBottom = (className, fraction) => {
    useEffect(() => {
        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            let newMarginBottom;
                newMarginBottom = (viewportWidth * fraction);
            const elements = document.querySelectorAll(className);
            if(viewportWidth>500){
            elements.forEach(element => {
                element.style.marginBottom = `${newMarginBottom}px`;
            });
        }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial value

        return () => window.removeEventListener('resize', handleResize);
    }, [className, fraction]);
};

export default useDynamicMarginBottom;
