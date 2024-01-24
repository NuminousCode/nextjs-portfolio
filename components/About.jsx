import React, {useRef} from 'react'
import styles from '../styles/About.module.css'
import Terminal from '../components/Terminal'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import useDynamicMarginBottom from '../helpers/useDynamicMarginBottom'
import useIntersectionObserver from '../helpers/useIntersectionObserver'
import useImageIntersectionObserver from '../helpers/useImageIntersectionObserver'

const About = (data) => {

  // Image URL extraction
  const imgUrl = data.data[38]
  const headshotUrl = data.data[32]

  // DOM elements references initializing 
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const headshotRef = useRef(null);

  // Custom hooks
  useDynamicFontSize([`.${styles.title}`], 36, 90, 0.06);
  useImageIntersectionObserver([imageRef], .2, 1000)
  useDynamicIconSize([`.${styles.headshot}`], 300, 150, .25)
  // useDynamicMarginBottom(`.${styles.headshot}`, .15)
  // useImageIntersectionObserver([headshotRef], .2, 1000)
  useIntersectionObserver([titleRef], 1, 500)

    return (
    <div className = {styles.containerMain} id="about">
      <div className = {styles.title} ref={titleRef}>About</div>
      <img src={headshotUrl} alt="image" className = {styles.headshot} ref={headshotRef}/>
      <Terminal className={styles.terminal}/>
      <img src={imgUrl} alt="image" className = {styles.image} ref={imageRef}/>
    </div>
  )
}

export default About
