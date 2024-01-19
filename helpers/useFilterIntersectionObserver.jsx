import { useEffect } from 'react';

const useFilterIntersectionObserver = (refs, threshold, delay = 0) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.filter = 'saturate(100%)';
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
    }, [refs, threshold, delay]); 
};

export default useFilterIntersectionObserver;
