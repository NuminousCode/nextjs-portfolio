import {React, useRef} from 'react'
import styles from '../styles/Experience.module.css'
import useIntersectionObserver from '../helpers/useIntersectionObserver'
import useImageIntersectionObserver from '../helpers/useImageIntersectionObserver'
import useFilterIntersectionObserver from '../helpers/useFilterIntersectionObserver'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import useDynamicFontSize from '../helpers/dynamicFontSize'

const Experience = (data) => {
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const itemRef1 = useRef(null);
  const itemRef2 = useRef(null);
  const cvRef = useRef(null);
  const imageRef = useRef(null);
  const imgUrl = data.data[5]
  const iconUrl = data.data[33]
  const gitUrl = data.data[34]

  useIntersectionObserver([titleRef1, titleRef2], 1, 1500)
  useIntersectionObserver([itemRef1, itemRef2, cvRef], 1, 2500)
  useImageIntersectionObserver([imageRef], .2, 500)
  useFilterIntersectionObserver([imageRef], .5, 4500)
  useDynamicIconSize([`.${styles.icon}`], 300, 5, 0.02);
  useDynamicIconSize([`.${styles.git}`], 300, 15, 0.04);
  useDynamicFontSize([`.${styles.title}`], 16, 100, 0.04);
  useDynamicFontSize([`.${styles.item}`, `.${styles.cv}`], 14, 100, 0.02);

  return (
    <div className = {styles.containerMain}>
      <div className = {styles.anchor} id="experience"></div>

      <div className ={styles.buckets}>
        <div className = {styles.bucket}>
          <div className = {styles.title} ref={titleRef1}>Experience</div>
          <div className = {styles.item} ref={itemRef1}>Associate - Infosys · '21–'22</div>
          <div className ={styles.cv} ref={cvRef}>
            <div>CV</div>
            <a href="https://docs.google.com/document/d/1OwzZzqCRPQMq6j-6Fw8D2yg2M_-q08pFZO61wNdNMvA/export?format=pdf" download="cv.pdf" className ={styles.link}><img src={iconUrl} alt="image" className ={styles.icon}/></a>
          </div>
        </div>

        <div className = {styles.bucket}>
          <div className = {styles.title} ref={titleRef2}>Connect</div>
          <div className = {styles.item} ref={itemRef2}>
            <div>Github</div>
            <img src={gitUrl} alt="image" className ={styles.git}/>
          </div>
        </div>

      </div>
      <img src={imgUrl} alt="image" className = {styles.image} ref={imageRef}/>
    </div>
  )
}

export default Experience
