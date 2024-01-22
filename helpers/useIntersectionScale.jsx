import { useEffect } from 'react';

// Modifies css property values based on object intersection
const useIntersectionScale = (refs, threshold = 0.2) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => { // Include the observer in the callback parameters
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '.8';
                        entry.target.style.transform = 'scale(1,1)';
                        observer.unobserve(entry.target); // Stop observing the element
                    }
                });
            },
            { threshold }
        );

        refs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs, threshold]); // Ensure refs and threshold are in the dependency array
};

export default useIntersectionScale;
