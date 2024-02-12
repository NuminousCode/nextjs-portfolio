import React, { useEffect } from 'react';
import styles from '../styles/Nav.module.css'; 

const NavUp = (data) => {

    // Extract image url
    const  upUrl= data.data[42]
    
    useEffect(() => {
        const backToTopBtn = document.getElementById("backToTopBtn");

        // Make scrollToTop appear when user scolls from top
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
    }, []); 

    return (
        <button id="backToTopBtn" className={styles.backToTopBtn} onClick={scrollToTop}><img src={upUrl} alt="image" className={styles.imageBtn}/></button>
    );
};

// Function to scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });}

export default NavUp;
