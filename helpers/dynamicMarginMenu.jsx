import { useEffect } from 'react';

// Dynamic Margin Adjustment for Menu Component 
const useDynamicMarginMenu = (className, fraction) => {
    useEffect(() => {

        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            let newMargin;
            if (viewportWidth > 1200) {
                newMargin = '400'; 
            } else {
                newMargin = 250 - (viewportWidth * fraction);
            }
            const elements = document.querySelectorAll(className);

            elements.forEach(element => {
                element.style.marginTop = `${newMargin}px`;
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, [className, fraction]);
};

export default useDynamicMarginMenu;
