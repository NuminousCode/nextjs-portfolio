import React, { useState, useEffect, useRef } from 'react';
import useTerminalIntersectionObserver from '../helpers/useTerminalIntersectionObserver';
import useDynamicLeft from '../helpers/useDynamicLeft'
import useDynamicFontSize from '../helpers/dynamicFontSize';
import styles from "../styles/Terminal.module.css";

const Terminal = () => {
    const introTextContent = "Hi, my name is Gerardo.<br/>I ";
    const [introText, setIntroText] = useState('');
    const [introTyped, setIntroTyped] = useState(false);
    const terminalRef = useRef(null)
    const [isTerminalVisible, setIsTerminalVisible] = useState(false);
    const [shouldStartTyping, setShouldStartTyping] = useState(false);

    useDynamicLeft([`.${styles.containerMain}`], 0.04);
    useDynamicFontSize([`.${styles.terminal}`], 8, 12, 0.012);

    useTerminalIntersectionObserver(
        [terminalRef], 
        1, 
        () => {
            setIsTerminalVisible(true);
            setTimeout(() => {
                setShouldStartTyping(true);
            }, 1000); 
        }, 
         2500
    );
    
    const items = [
        "build user interfaces.",
        "build and maintain database and server systems.",
        "integrate third-party services, CMS' and APIs.",
        "develop data-driven applications.",
        "design prototypes.",
        "build cross-platform applications.",
        "develop mobile-first applications."
    ];
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

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
