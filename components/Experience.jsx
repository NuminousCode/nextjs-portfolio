import {React, useRef} from 'react'
import styles from '../styles/Experience.module.css'
import useIntersectionObserver from '../helpers/useIntersectionObserver'
import useImageIntersectionObserver from '../helpers/useImageIntersectionObserver'
import useFilterIntersectionObserver from '../helpers/useFilterIntersectionObserver'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import useDynamicFontSize from '../helpers/dynamicFontSize'

const Experience = (data) => {

  // DOM elements references initializing 
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const itemRef1 = useRef(null);
  const itemRef2 = useRef(null);
  const cvRef = useRef(null);
  const imageRef = useRef(null);

  // Image URL extractions
  const imgUrl = data.data[5]
  const iconUrl = data.data[33]
  const gitUrl = data.data[34]

  const formatedCmsUrl = data ? `${imgUrl}?fm=webp&w=2000&h=2000`: null;

  // Custom hooks
  useIntersectionObserver([titleRef1, titleRef2], 1, 0)
  useIntersectionObserver([itemRef1, itemRef2, cvRef], 1, 500)
  useImageIntersectionObserver([imageRef], .2, 200)
  useFilterIntersectionObserver([imageRef], .5, 1500)
  useDynamicIconSize([`.${styles.icon}`], 300, 5, 0.02);
  useDynamicIconSize([`.${styles.git}`], 300, 15, 0.04);
  useDynamicFontSize([`.${styles.title}`], 16, 100, 0.04);
  useDynamicFontSize([`.${styles.item}`, `.${styles.cv}`], 14, 100, 0.02);

  const githubUrl = "https://github.com/NuminousCode"
  return (
    <div className = {styles.containerMain} id="experience">
      <div className = {styles.anchor}></div>

      <div className ={styles.buckets}>
        <div className = {styles.bucket}>
          <div className = {styles.title} ref={titleRef1}>Experience</div>
          <div className = {styles.item} ref={itemRef1}>Associate - Infosys · '22–'23</div>
          <div className ={styles.cv} ref={cvRef}>
            <div>CV</div>
            <a href="https://docs.google.com/document/d/1OwzZzqCRPQMq6j-6Fw8D2yg2M_-q08pFZO61wNdNMvA/export?format=pdf" download="cv.pdf" className ={styles.link}><img src={iconUrl} alt="image" className ={styles.icon}/></a>
          </div>
        </div>

        <div className = {styles.bucket}>
          <div className = {styles.title} ref={titleRef2}>SOURCE CODE</div>
          <div className = {styles.item} ref={itemRef2}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <div>Github</div>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <img src={gitUrl} alt="image" className ={styles.git}/>
            </a>
          </div>
        </div>

      </div>
      <img src={formatedCmsUrl} alt="image" className = {styles.image} ref={imageRef}/>
    </div>
  )
}

export default Experience
