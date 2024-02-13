import { useRef } from "react";
import styles from "../styles/Solutions.module.css";
import Ticker from '../components/Ticker'
import useIntersectionObserver from "../helpers/useIntersectionObserver";
import useImageIntersectionObserver from "../helpers/useImageIntersectionObserver"
import useDynamicFontSize from "../helpers/dynamicFontSize";

const Solutions = (data) => {
  // Image URL extraction
  const imgUrl = data.data[35];

  //Image formatting
  const formatedCmsUrl = data
  ? `${imgUrl}?fm=webp&w=2000&h=1500`
  : null;

  // DOM elements references initializing 
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const builtRef = useRef(null);

  // Custom hook invocation
    useImageIntersectionObserver([imgRef], 0.2);
    useIntersectionObserver([titleRef], 1, 250);
    useIntersectionObserver([builtRef], 1, 500);
    useDynamicFontSize([`.${styles.title}`], 18, 100, 0.03);
    useDynamicFontSize([`.${styles.builtWith}`], 16, 100, 0.022);

  return (
    <div className={styles.containerMain}>
      <div className ={styles.anchorSolutions} id="solutions"></div>
      <div className = {styles.title} ref={titleRef}>Responsive Full-Stack Applications</div>
      <div className = {styles.builtWith} ref={builtRef}>Built With</div>
      <Ticker data= {data.data}/>
      <img src={formatedCmsUrl} alt="image" className={styles.image} ref={imgRef} />
    </div>
  );
};

export default Solutions;
