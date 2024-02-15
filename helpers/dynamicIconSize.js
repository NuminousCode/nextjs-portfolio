import { useEffect } from 'react';

// Dynamic Icon Size Resizer 
const useDynamicIconSize = (classNames, baseViewportWidth, baseSize, scaleFactor) => {
    useEffect(() => {
        const adjustSize = () => {
            const viewportWidth = Math.min(window.innerWidth, 1200);
            let newSize;

            if (viewportWidth > baseViewportWidth) {
                newSize = baseSize + ((viewportWidth - baseViewportWidth) * scaleFactor);
            } else {
                newSize = baseSize;
            }
            classNames.forEach(className => {
                const elements = document.querySelectorAll(className);
                elements.forEach(element => {
                    element.style.height = `${newSize}px`;
                    element.style.width = `${newSize}px`;
                });
            });
        };

        window.addEventListener('resize', adjustSize);
        adjustSize(); // Initialize on load

        return () => window.removeEventListener('resize', adjustSize);
    }, [classNames, baseViewportWidth, baseSize, scaleFactor]);
};

export default useDynamicIconSize;
