import React, { useRef } from 'react';
import styles from '../styles/Projects.module.css'
import useDynamicFontSize from '../helpers/dynamicFontSize';
import useDynamicIconSize from '../helpers/dynamicIconSize';
import useDynamicMargin from '../helpers/useDynamicMarginProjects';
import useIntersectionObserver from '../helpers/useIntersectionObserver'
import useImageIntersectionObserver from '../helpers/useImageIntersectionObserver'

const Projects = (data) => {

    // Image URL extractions
    const imgUrl = data.data[2]
    const newsUrl= data.data[40]
    const servicesUrl= data.data[41]
    const forestUrl= data.data[39]

    // DOM elements references initializing 
    const imageRef = useRef(null);
    const responsive = useRef(null);
    const cont = useRef(null)
    const titleProjects = useRef(null);
    const carousel = useRef(null);

    // Custom hooks
    useDynamicFontSize([`.${styles.label}`, `.${styles.title}`], 1, 0.035);
    useDynamicFontSize([`.${styles.item}`], 1, 0.035);
    useDynamicFontSize([`.${styles.responsive}`], 1, 0.050);
    useDynamicFontSize([`.${styles.projectsTitle}`], 20, 100, 0.03);
    useDynamicFontSize([`.${styles.cardHeader}`], 12, 60, 0.03);
    useDynamicFontSize([`.${styles.feature}`], 8, 16, 0.01);
    useDynamicIconSize([`.${styles.invertIcon}`], 300, 20, 0.04);
    useDynamicIconSize([`.${styles.vercelIcon}`], 300, 15, 0.018);
    useDynamicMargin([`.${styles.projectsTitle}`], .15)
    useIntersectionObserver([responsive], .02, 500)
    useImageIntersectionObserver([imageRef], .02)
    useImageIntersectionObserver([cont], .02, 500)
    useImageIntersectionObserver([carousel], .2, 750)
    useIntersectionObserver([titleProjects], 1, 0, .8)

  return (
    <div className={styles.containerMain}>
        <div  className = {styles.projectsAnchor} id="projects"></div>
      <div className={styles.containerProjects}>
        <div className={styles.projectsTitle} ref={titleProjects}>Projects</div>
        <div className={styles.carousel} ref={carousel}>
            {/*Radio inputs for carousel card switching functionality*/}
            <input type="radio" name="slider" id="item1" className={styles.item1}defaultChecked />
            <input type="radio" name="slider" id="item2" className={styles.item2}/>
            <input type="radio" name="slider" id="item3" className={styles.item3}/>
            <div className={styles.cards}>
                <label className={styles.card} htmlFor="item1" id={styles.card1}>
                    <div className = {styles.cardContent}>
                        <h1 className={styles.cardHeader}>NEWS</h1>
                        <div className={styles.features}>
                            <div className = {styles.feature}>next.js</div>
                            <div className = {styles.feature}>HCMS</div>
                            <div className = {styles.feature}>nosql serverless</div>
                            <div className = {styles.feature}>Node.Js</div>
                            </div>
                    </div>
                    <img
                        className={styles.cardImg}
                        src={newsUrl}
                        alt="image"
                    />
                </label>
                <label className={styles.card} htmlFor="item2" id={styles.card2}>
                    <div className = {styles.cardContent}>
                        <h1 className={styles.cardHeader}>NoSql CRUD</h1>
                        <div className={styles.features}>
                            <div className = {styles.feature}>html css js</div>
                            <div className = {styles.feature}>Node.js</div>
                            <div className = {styles.feature}>mongo db</div>
                            <div className = {styles.feature}>mongoose</div>
                            </div>
                    </div>
                    <img
                        className={styles.cardImg}
                        src={forestUrl}
                        alt="image"
                    />
                </label>
                <label className={styles.card} htmlFor="item3" id={styles.card3}>
                <div className = {styles.cardContent}>
                        <h1 className={styles.cardHeader}>Forestry</h1>
                        <div className={styles.features}>
                            <div className = {styles.feature}>html</div>
                            <div className = {styles.feature}>css</div>
                            <div className = {styles.feature}>js</div>
                            </div>
                    </div>
                    <img
                        className={styles.cardImg}
                        src={servicesUrl}
                        alt="image"
                    />
                </label>
            </div>
        </div>
      </div>
      <img src={imgUrl} alt="image" className={styles.image} ref={imageRef} />
    </div>
  );
}

export default Projects
