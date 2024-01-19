import React from 'react'
import SmoothScrollLink from '../helpers/smoothScrollLink'
import styles from '../styles/Menu.module.css'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useDynamicLineHeight from '../helpers/dynamicLineHeightMenu'
import useDynamicMarginTop from '../helpers/dynamicMarginMenu'


const Menu = ({className}) => {

  useDynamicFontSize([`.${styles.menuItem}`], 12, 60, 0.04);
  useDynamicLineHeight([`.${styles.containerMain}`], .08);
  useDynamicMarginTop([`.${styles.containerMain}`],0.01);
  
  const menuClassName = styles[className]
  return (
    <div className = {`${styles.containerMain} ${menuClassName}`}>
      <SmoothScrollLink to="#anchorSolutions" duration={2000}><div className = {styles.menuItem}>SOLUTIONS</div></SmoothScrollLink>
      <SmoothScrollLink to="#projects" duration={2500}><div className = {styles.menuItem}>PROJECTS</div></SmoothScrollLink>
      <SmoothScrollLink to="#about" duration={3500}><div className = {styles.menuItem}>ABOUT</div></SmoothScrollLink>
      <SmoothScrollLink to="#experience" duration={4500}><div className = {styles.menuItem}>EXPERIENCE</div></SmoothScrollLink>
      <SmoothScrollLink to="#contact" duration={4500}><div className = {styles.menuItem}>CONTACT</div></SmoothScrollLink>
    </div>
  )
}

export default Menu
