import { useEffect } from 'react';

// Modifies css property values based on object intersection
const useIntersectionObserver = (refs, threshold, delay = 0, opacity = 1) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = `${opacity}`;
                            entry.target.style.transform = 'translateY(0px)';
                            observer.unobserve(entry.target);
                        }, delay);
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
    }, [refs, threshold, delay, opacity]); // Include opacity in the dependency array
};

export default useIntersectionObserver;
