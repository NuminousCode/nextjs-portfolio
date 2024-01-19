import React, { useEffect } from 'react';
import styles from '../styles/Nav.module.css'; // Assuming your CSS module is named Terminal.module.css

const Nav = (data) => {
    const  upUrl= data.data[42]
    useEffect(() => {
        const backToTopBtn = document.getElementById("backToTopBtn");

        const handleScroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopBtn.style.opacity = 1;
            } else {
                backToTopBtn.style.opacity = 0;
            }
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <button id="backToTopBtn" className={styles.backToTopBtn} onClick={scrollToTop}><img src={upUrl} alt="" className={styles.imageBtn}/></button>
    );
};

// Function to scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });}

export default Nav;
