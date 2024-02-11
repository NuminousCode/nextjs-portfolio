import React from 'react'  
import Menu from './Menu'
import styles from '../styles/Hero.module.css'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useDynamicLineHeight from '../helpers/dynamicLineHeight'

const Hero = (data) => {

  // Image URL extraction
  const imgUrl = data.data[0]

  const formatedCmsUrl = data
  ? `${imgUrl}?fm=webp&w=2000&h=3000`
  : null;

  // Custom hooks
  useDynamicIconSize([`.${styles.menuIcon}`, `.${styles.menuClosed}`], 300, 25, 0.055);
  useDynamicFontSize([`.${styles.slogan}`], 20, 100, 0.052);
  useDynamicLineHeight([`.${styles.slogan}`], 0.03);

  return (
    <div className={styles.containerMain} >
      <div className ={styles.header}>
        <div className={styles.logo}>G.S</div>
      </div>
      <div className = {styles.slogan}>MODERN WEB DEVELOPMENT</div>
      <Menu />
      <img src={formatedCmsUrl} alt="image" className = {styles.image}/>
    </div>
  )
}

export default Hero