import { useEffect } from 'react';

const useDynamicMarginTop = (className, fraction) => {
    useEffect(() => {
        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            let newMarginTop;
                newMarginTop =  175 + (viewportWidth * fraction);
            const elements = document.querySelectorAll(className);
            elements.forEach(element => {
                element.style.marginTop = `${newMarginTop}px`;
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial value

        return () => window.removeEventListener('resize', handleResize);
    }, [className, fraction]);
};

export default useDynamicMarginTop;
