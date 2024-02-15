import React from 'react';
import styles from '../styles/Menu.module.css'

// Bezier curve
const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};


const smoothScrollTo = (target, duration = 500) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    // Calculate the target Y position: get the top position of the target element relative to the viewport, 
    // and add the current vertical scroll offset of the document.
    const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    // Smooth scroll animation to the target element 
    const scroll = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollY = easeInOutCubic(timeElapsed, startY, distance, duration);

        window.scrollTo(0, nextScrollY);
        if (timeElapsed < duration) requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
};
    //Initiate smooth scroll 
    const SmoothScrollLink = ({ to, duration, children }) => {
        const handleClick = (e) => {
            e.preventDefault();
            smoothScrollTo(to, duration);
        };

        return (
            <a href={to} onClick={handleClick} className={styles.link}>
                {children}
            </a>
        );
    };

export default SmoothScrollLink;
