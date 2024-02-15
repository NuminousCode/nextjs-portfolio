import React, { useEffect, useState } from 'react';
import styles from '../styles/NavDown.module.css';

const NavDown = ({ data }) => {
    const downUrl = data[42]; 

    // State to manage button visibility
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        const button = document.getElementById('scrollToNextAnchor');
        const anchors = document.querySelectorAll('#solutions, #projects, #about, #experience, #contact');

        const findNextAnchor = () => {
            return Array.from(anchors).find(anchor => {
                const anchorRect = anchor.getBoundingClientRect();
                return anchorRect.top > 10;
            });
        };


        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportWidth = window.innerWidth;

            // Identifying the last anchor based on its position in the anchors array
            if(scrollPosition > 60 ){
            const lastAnchor = anchors[anchors.length - 1];
            const lastAnchorRect = lastAnchor.getBoundingClientRect();

            if (viewportWidth > 750){
                setIsButtonVisible(true);
            } else{
                setIsButtonVisible(false);
            }

            // Check if the scroll position is beyond the last anchor
            if (lastAnchor && (scrollPosition + window.innerHeight) >= (lastAnchorRect.top + window.scrollY)) {
                setIsButtonVisible(false); // Hide button if we've scrolled past the last anchor
            } else {
                setIsButtonVisible(true); // Otherwise, show button based on scroll position
            }
           
        } else {
            setIsButtonVisible(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check to set button visibility
        handleScroll();

        button.addEventListener('click', () => {
            let nextAnchor = findNextAnchor();
                nextAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 


    return (
        <div className={styles.containerMain}>
            <button 
                id="scrollToNextAnchor" 
                className={`${styles.downBtn} ${isButtonVisible ? styles.animateMoveAndFade : ''}`} 
                style={{ opacity: isButtonVisible ? 1 : 0, 
                    pointerEvents: isButtonVisible ? 'auto' : 'none', 
                 }}                           
            >
                <img src={downUrl} alt="Scroll Down" className={styles.imageBtn}/>
            </button>
        </div>
    );
};

export default NavDown;
