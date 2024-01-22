import React, {useState} from 'react'  
import Menu from './Menu'
import styles from '../styles/Hero.module.css'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useDynamicLineHeight from '../helpers/dynamicLineHeight'


const Hero = (data) => {

  // Image URL extraction
  const imgUrl = data.data[0]
  const menuIcon = data.data[36]
  const menuClosed = data.data[37]

  // Custom hooks
  useDynamicIconSize([`.${styles.menuIcon}`, `.${styles.menuClosed}`], 300, 25, 0.055);
  useDynamicFontSize([`.${styles.logo}`], 24, 80, 0.07);
  useDynamicFontSize([`.${styles.slogan}`], 20, 100, 0.052);
  useDynamicLineHeight([`.${styles.slogan}`], 0.03);

  return (
    <div className={styles.containerMain} >
      <div className ={styles.header}>
        <div className={styles.logo}>G.S</div>
      </div>
      <div className = {styles.slogan}>MODERN WEB DEVELOPMENT</div>
      <Menu />
      <img src={imgUrl} alt="image" className = {styles.image}/>
    </div>
  )
}

export default Hero