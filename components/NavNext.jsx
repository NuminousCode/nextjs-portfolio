import React, { useEffect } from 'react';
import styles from '../styles/Nav.module.css'; 

const ScrollToNext = ({ sectionRefs }) => {
    const [nextSection, setNextSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY + window.innerHeight;
            const sortedSections = sectionRefs
                .map(ref => ref.current)
                .filter(section => section) // Filter out null refs
                .sort((a, b) => a.offsetTop - b.offsetTop); // Sort sections by their position

            const nextSection = sortedSections.find(section => section.offsetTop >= currentScrollPosition);
            setNextSection(nextSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionRefs]); // Depend on sectionRefs to re-initialize if sections change

    const scrollToNextSection = () => {
        nextSection?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Button will always attempt to scroll to the next section dynamically determined
    return (
        <button onClick={scrollToNextSection}>
            Scroll to Next Section
        </button>
    );
};

// Function to scroll to the next section
const scrollToNextSection = () => {
    const section = document.getElementById("portfolioSection");
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

export default ScrollToNext;
