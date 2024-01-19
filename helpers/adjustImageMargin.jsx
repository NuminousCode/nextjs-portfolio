import { useEffect } from 'react';

const useAdjustImageMargin = (selector, baseFraction, scaleFactor) => {
    useEffect(() => {
        const adjustImageMargin = () => {
            const viewportWidth = Math.min(window.innerWidth, 1220);
            const fraction = ((viewportWidth-902) * scaleFactor);
            const marginTop = -223 - fraction
            const imageElements = document.querySelectorAll(selector);
            imageElements.forEach(imageElement => {
                imageElement.style.marginTop = `${marginTop}px`;
            });
        };

        adjustImageMargin();
        window.addEventListener('resize', adjustImageMargin);

        return () => {
            window.removeEventListener('resize', adjustImageMargin);
        };
    }, [selector, baseFraction, scaleFactor]);
};

export default useAdjustImageMargin;
