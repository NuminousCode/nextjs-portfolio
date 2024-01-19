import React, { useRef } from "react";
import styles from "../styles/Solutions.module.css";
import Ticker from '../components/Ticker'
import useIntersectionObserver from "../helpers/useImageIntersectionObserver";
import useImageIntersectionObserver from "../helpers/useImageIntersectionObserver"
import useDynamicFontSize from "../helpers/dynamicFontSize";

const Solutions = (data) => {
  const imgUrl = data.data[35];
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const builtRef = useRef(null);
  useImageIntersectionObserver([imgRef], 0.4);
  useIntersectionObserver([titleRef], 1, 1000);
  useIntersectionObserver([builtRef], 1, 1500);
  useDynamicFontSize([`.${styles.title}`], 18, 100, 0.03);
  useDynamicFontSize([`.${styles.builtWith}`], 16, 100, 0.022);

  return (
    <div className={styles.containerMain}>
      <div className ={styles.anchorSolutions} id="anchorSolutions"></div>
      <div className = {styles.title} ref={titleRef}>Responsive Full-Stack Applications</div>
      <div className = {styles.builtWith} ref={builtRef}>Built With</div>
      <Ticker data= {data.data}/>
      <img src={imgUrl} alt="" className={styles.image} ref={imgRef} />
    </div>
  );
};

export default Solutions;
