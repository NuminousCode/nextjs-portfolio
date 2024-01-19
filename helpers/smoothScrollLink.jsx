import React from 'react';
import styles from '../styles/Menu.module.css'

const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

const smoothScrollTo = (target, duration = 500) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const scroll = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollY = easeInOutCubic(timeElapsed, startY, distance, duration);

        window.scrollTo(0, nextScrollY);
        if (timeElapsed < duration) requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
};

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
