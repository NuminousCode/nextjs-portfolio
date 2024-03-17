import { useRef, useState } from 'react';
import styles from '../styles/Projects.module.css'
import useDynamicFontSize from '../helpers/dynamicFontSize';
import useDynamicMargin from '../helpers/useDynamicMarginProjects';
import useIntersectionObserver from '../helpers/useIntersectionObserver'
import useImageIntersectionObserver from '../helpers/useImageIntersectionObserver'

const Projects = (data) => {

    // Image URL extractions
    const imgUrl = data.data[2]
    const newsUrl= data.data[40]
    const natureUrl= data.data[41]
    const dbUrl= data.data[39]
    const magisUrl= data.data[43]

    // Image formatting
    const formatedBackgroundUrl = data ? `${imgUrl}?fm=webp&w=2000&h=3000`: null;
    const formatedNewsUrl = data ? `${newsUrl}?fm=webp&w=750&h=1000`: null;
    const formatedDBUrl = data ? `${dbUrl}?fm=webp&w=750&h=1000`: null;
    const formatedNatureUrl = data ? `${natureUrl}?fm=webp&w=750&h=1000`: null;
    const formatedmagisUrl = data ? `${magisUrl}?fm=webp&w=750&h=1000`: null;

    // DOM elements references initializing 
    const imageRef = useRef(null);
    const cont = useRef(null)
    const titleProjects = useRef(null);
    const carousel = useRef(null);
    const repoLinks = useRef(null);

    // Custom hooks
    useDynamicFontSize([`.${styles.label}`, `.${styles.title}`], 1, 0.035);
    useDynamicFontSize([`.${styles.item}`], 1, 0.035);
    useDynamicFontSize([`.${styles.projectsTitle}`], 24, 100, 0.032);
    useDynamicFontSize([`.${styles.cardHeader}`], 16, 60, 0.03);
    useDynamicFontSize([`.${styles.feature}`], 8, 16, 0.01);
    useDynamicFontSize([`.${styles.projectLink}`], 20, 36, 0.025);
    useDynamicMargin([`.${styles.projectsTitle}`], .12)
    useImageIntersectionObserver([imageRef], .02)
    useImageIntersectionObserver([cont], .02, 500)
    useImageIntersectionObserver([carousel], .2, 250)
    useIntersectionObserver([titleProjects], 1, 0, .8)
    useIntersectionObserver([repoLinks], .01, 0, 1)

    const [activeCard, setActiveCard] = useState('item1'); 
    const handleRadioChange = (event) => {
        setActiveCard(event.target.id);
      };
      
      const cardContent1 = (
        <label className={styles.card} htmlFor="item1" id={styles.card1}>
            {activeCard !== 'item1' && <div className={styles.cardOverlay}></div>}
          <a href={activeCard === 'item1' ? "https://nextjs-news-site-omega.vercel.app/" : "#"} 
             target="_blank" 
             className={styles.link} 
             style={{
               pointerEvents: activeCard === 'item1' ? 'auto' : 'none',
               textDecoration: 'none'
             }}
             onClick={(e) => { if (activeCard !== 'item1') e.preventDefault(); }}
          >
            <div className={styles.cardContent}>
              <h1 className={styles.cardHeader}>NEWS</h1>
              <div className={styles.features}>
                <div className={styles.feature}>next.js  |</div>
                <div className={styles.feature}>HCMS  |</div>
                <div className={styles.feature}>Node.Js |</div>
                <div className={styles.feature}>serverless mongo-db</div>
              </div>
            <img className={styles.cardImg} src={formatedNewsUrl} alt="image" />
            <div className={styles.projectLink}>
              <a href='https://github.com/NuminousCode/nextjs-news-site' target="_blank" rel="noopener noreferrer">
                &lt;/&gt;
              </a>
            </div>
            </div>
          </a>
        </label>
      );
      
      const cardContent2 = (
        <label className={styles.card} htmlFor="item2" id={styles.card2}>
            {activeCard !== 'item2' && <div className={styles.cardOverlay}></div>}
            <a href={activeCard === 'item2' ? "https://nextjs-app-showcase.pages.dev/" : "#"} 
                target="_blank" 
                className={styles.link} 
                style={{
                pointerEvents: activeCard === 'item2' ? 'auto' : 'none',
                textDecoration: 'none'
                }}
                onClick={(e) => { if (activeCard !== 'item2') e.preventDefault(); }}
            >
            <div className={styles.cardContent}>
              <h1 className={styles.cardHeader}>NoSql CRUD</h1>
              <div className={styles.features}>
                <div className={styles.feature}>Node.js |</div>
                <div className={styles.feature}>mongo-db |</div>
                <div className={styles.feature}>mongoose |</div>
                <div className={styles.feature}>Bootstrap</div>
              </div>
            <img className={styles.cardImg} src={formatedDBUrl} alt="image"/>
            <div className={styles.projectLink}>
              <a href='https://github.com/NuminousCode/mongo-crud-app' target="_blank" rel="noopener noreferrer">
                &lt;/&gt;
              </a>
            </div>
            </div>
          </a>
        </label>
      );
      
      const cardContent3 = (
        <label className={styles.card} htmlFor="item3" id={styles.card3}>
            {activeCard !== 'item3' && <div className={styles.cardOverlay}></div>}
          <a href={activeCard === 'item3' ? "https://fundamentals-conservation-site.pages.dev/" : "#"} 
             target="_blank" 
             className={styles.link} 
             style={{
               pointerEvents: activeCard === 'item3' ? 'auto' : 'none',
               textDecoration: 'none'
             }}
             onClick={(e) => { if (activeCard !== 'item3') e.preventDefault(); }}
          >
            <div className={styles.cardContent}>
              <h1 className={styles.cardHeader}>Conservation</h1>
              <div className={styles.features}>
                <div className={styles.feature}>html |</div>
                <div className={styles.feature}>css |</div>
                <div className={styles.feature}>js</div>
              </div>
              <img className={styles.cardImg} src={formatedNatureUrl} alt="image"/>
              <div className={styles.projectLink}>
              <a href='https://github.com/NuminousCode/fundamentals-conservation-site' target="_blank" rel="noopener noreferrer">
                &lt;/&gt;
              </a>
            </div>
            </div>
          </a>
        </label>
      );

      const cardContent4 = (
        <label className={styles.card} htmlFor="item4" id={styles.card4}>
            {activeCard !== 'item4' && <div className={styles.cardOverlay}></div>}
          <a href={activeCard === 'item4' ? "https://magiswebservices.com" : "#"} 
             target="_blank" 
             className={styles.link} 
             style={{
               pointerEvents: activeCard === 'item4' ? 'auto' : 'none',
               textDecoration: 'none'
             }}
             onClick={(e) => { if (activeCard !== 'item4') e.preventDefault(); }}
          >
            <div className={styles.cardContent}>
              <h1 className={styles.cardHeader}>Magis Web Services</h1>
              <div className={styles.features}>
                <div className={styles.feature}>next.js |</div>
                <div className={styles.feature}>Material UI |</div>
                <div className={styles.feature}>Node.js |</div>
                <div className={styles.feature}>Bootstrap</div>
              </div>
              <img className={styles.cardImg} src={formatedmagisUrl} alt="image"/>
              <div className={styles.projectLink}>
              <a href='https://github.com/NuminousCode/web-services' target="_blank" rel="noopener noreferrer">
                &lt;/&gt;
              </a>
            </div>
            </div>
          </a>
        </label>
      );
      
  return (
    <div className={styles.containerMain}>
        <div  className = {styles.projectsAnchor} id="projects"></div>
      <div className={styles.containerProjects}>
        <div className={styles.projectsTitle} ref={titleProjects}>Projects</div>
        <div className={styles.carousel} ref={carousel}>
            {/*Radio inputs for carousel card switching functionality*/}
            <input type="radio" name="slider" id="item1" className={styles.item1} defaultChecked onChange={handleRadioChange} />
            <input type="radio" name="slider" id="item2" className={styles.item2} onChange={handleRadioChange}/>
            <input type="radio" name="slider" id="item3" className={styles.item3} onChange={handleRadioChange}/>
            <input type="radio" name="slider" id="item4" className={styles.item4} onChange={handleRadioChange}/>
            <div className={styles.cards}>
                {cardContent1}
                {cardContent2}
                {cardContent3}
                {cardContent4}
            </div>
        </div>
      </div>
      <img src={formatedBackgroundUrl} alt="image" className={styles.image} ref={imageRef} />
    </div>
  );
}

export default Projects
