import { useEffect } from 'react';

// Dynamic left margin adjustment
const useDynamicMargin = (className, fraction1) => {
    useEffect(() => {

        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            let newMargin;
            if (viewportWidth < 1600) {
                newMargin = (viewportWidth * fraction1);
            } else{
                newMargin = 75
            }
            const elements = document.querySelectorAll(className);

            elements.forEach(element => {
                element.style.left = `${newMargin}%`;
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, [className, fraction1]);
};

export default useDynamicMargin;
