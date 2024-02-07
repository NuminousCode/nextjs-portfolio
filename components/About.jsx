import React, {useRef} from 'react'
import styles from '../styles/About.module.css'
import Terminal from '../components/Terminal'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import useIntersectionObserver from '../helpers/useIntersectionObserver'
import useImageIntersectionObserver from '../helpers/useImageIntersectionObserver'

const About = (data) => {

  // Image URL extraction
  const imgUrl = data.data[38]
  const headshotUrl = data.data[32]

  const formatedCmsUrl = data ? `${imgUrl}?fm=webp&w=2000&h=2000`: null;
  const formatedHeadshotUrl = data ? `${headshotUrl}?fm=webp&w=500&h=500`: null;

  // DOM elements references initializing 
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const headshotRef = useRef(null);
  
  // Custom hooks
  useDynamicFontSize([`.${styles.title}`], 36, 90, 0.06);
  useImageIntersectionObserver([imageRef], .2, 500)
  useDynamicIconSize([`.${styles.headshot}`], 300, 150, .25)
  useIntersectionObserver([headshotRef], 1, 250, .8)
  useIntersectionObserver([titleRef], 1, 0)

    return (
    <div className = {styles.containerMain} id="about">
      <div className = {styles.title} ref={titleRef}>About</div>
      <img src={formatedHeadshotUrl} alt="image" className = {styles.headshot} ref={headshotRef}/>
      <Terminal className={styles.terminal}/>
      <img src={formatedCmsUrl} alt="image" className = {styles.image} ref={imageRef}/>
    </div>
  )
}

export default About
