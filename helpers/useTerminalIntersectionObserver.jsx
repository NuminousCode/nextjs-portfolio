import { useEffect } from 'react';

// Modifies opacity property value based on object intersection
const useTerminalIntersectionObserver = (refs, threshold, onVisible, delay = 0) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            if (onVisible) {
                                onVisible(entry.target); 
                            }
                            entry.target.style.opacity = '1';
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
    }, [refs, threshold, delay, onVisible]); 
};

export default useTerminalIntersectionObserver;
