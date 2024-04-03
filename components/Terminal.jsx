import React, { useState, useEffect, useRef } from 'react';
import useTerminalIntersectionObserver from '../helpers/useTerminalIntersectionObserver';
import useDynamicFontSize from '../helpers/dynamicFontSize';
import styles from "../styles/Terminal.module.css";

const Terminal = () => {

    //  State variables initializing 
    const introTextContent = "Hi, my name is Gerardo.<br/>I ";
    const [introText, setIntroText] = useState('');
    const [introTyped, setIntroTyped] = useState(false);
    const [isTerminalVisible, setIsTerminalVisible] = useState(false);
    const [shouldStartTyping, setShouldStartTyping] = useState(false);
    
    // DOM element reference initializing 
    const terminalRef = useRef(null)
    
    // Custom hooks
    useDynamicFontSize([`.${styles.terminal}`], 10, 14, 0.008);
    useTerminalIntersectionObserver(
        [terminalRef], 
        1, 
        () => {
            setIsTerminalVisible(true);
            setTimeout(() => {
                setShouldStartTyping(true);
            }, 1000); 
        }, 
         1000
    );
    
    // String array for terminal display
    const items = [
        "'m a software engineer, specializing in full stack development'",
        "build user interfaces.",
        "build and maintain database and server systems.",
        "integrate third-party services and APIs.",
        "develop data-driven applications.",
        "design prototypes.",
        "build cross-platform applications.",
        "develop mobile-first applications."
    ];

    //  State variables initializing for managing a typewriter effect
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);


    // useEffect hook to control the typing animation of the terminal.
    useEffect(() => {
        let timer;

        if (!isTerminalVisible || !shouldStartTyping) {
            return;
        }

        if (!introTyped) {
            if (introText.length < introTextContent.length) {
                timer = setTimeout(() => {
                    setIntroText(introTextContent.substring(0, introText.length + 1));
                }, 100);  
            } else {
                setIntroTyped(true);
            }
        }

        if (introTyped) {
            if (isDeleting) {
                if (count > 0) {
                    timer = setTimeout(() => {
                        setDisplayText(displayText.slice(0, -1));
                        setCount(count - 1);
                    }, 50); 
                } else {
                    setIsDeleting(false);
                    setIndex((index + 1) % items.length);
                }
            } else {
                if (count < items[index].length) {
                    timer = setTimeout(() => {
                        setDisplayText(displayText + items[index][count]);
                        setCount(count + 1);
                    }, 100);  
                } else {
                    timer = setTimeout(() => {
                        setIsDeleting(true);
                    }, 1500);  
                }
            }
        }

        return () => clearTimeout(timer);
    }, [count, index, isDeleting, items, displayText, introText, introTyped]);

    return (
        <div className={styles.containerMain} ref={terminalRef} 
        style={{ opacity: isTerminalVisible ? 1 : 0 }}>
            <div className={styles.terminalGlitch}></div>
            <div className={styles.terminal} >
                <div id="typingEffect" className={styles.typing}>
                    <span id="introText" dangerouslySetInnerHTML={{ __html: introText }}></span>
                    <span id="dynamicText">{displayText}</span>
                    <span className={styles.typingCursor}>|</span>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
