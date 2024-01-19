import React, {useRef} from 'react'
import styles from '../styles/About.module.css'
import Terminal from '../components/Terminal'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useIntersectionObserver from '../helpers/useIntersectionObserver'
import useImageIntersectionObserver from '../helpers/useImageIntersectionObserver'

const About = (data) => {
  const imgUrl = data.data[38]
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  useDynamicFontSize([`.${styles.title}`], 36, 90, 0.06);
  useImageIntersectionObserver([imageRef], .2, 1000)
  useIntersectionObserver([titleRef], 1, 500)
    return (
    <div className = {styles.containerMain} id="about">
      <div className = {styles.title} ref={titleRef}>About</div>
      <Terminal />
      <img src={imgUrl} alt="" className = {styles.image} ref={imageRef}/>
    </div>
  )
}

export default About
