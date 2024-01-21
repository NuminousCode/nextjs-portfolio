import React, {useState} from 'react'  
import Menu from './Menu'
import styles from '../styles/Hero.module.css'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useDynamicLineHeight from '../helpers/dynamicLineHeight'


const Hero = (data) => {

  const [isChecked, setIsChecked] = useState(false);
  const menuClassName = isChecked ? "active" : "";
  const classChecked = isChecked ? styles.active : "";
  const menuActive = isChecked ? styles.menuActive : "";
  const menuInactive = isChecked ? styles.menuInactive : "";
  
    const imgUrl = data.data[0]
    const menuIcon = data.data[36]
    const menuClosed = data.data[37]

    const handleCheckboxChange = (checked) => {
      setIsChecked(checked);
    };

    useDynamicIconSize([`.${styles.menuIcon}`, `.${styles.menuClosed}`], 300, 25, 0.055);
    useDynamicFontSize([`.${styles.logo}`], 24, 80, 0.07);
    useDynamicFontSize([`.${styles.slogan}`], 20, 100, 0.052);
    useDynamicLineHeight([`.${styles.slogan}`], 0.03);


  return (
    <div className={styles.containerMain} >
      <div className ={styles.header}>
        <div className={styles.logo}>G.S</div>
        <input
          type="checkbox"
          className={styles.openMenu}
          id="openMenu"
          checked={isChecked}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
        <label htmlFor="openMenu">
          <img src={menuIcon} alt="image" className = {`${styles.menuIcon} ${menuInactive}`}/> 
          <img src={menuClosed} alt="image" className = {`${styles.menuClosed} ${menuActive}`}/> 
        </label>
      </div>
      <div className = {`${styles.slogan} ${classChecked}`}>MODERN WEB DEVELOPMENT</div>
      <Menu className = {menuClassName}/>
      <img src={imgUrl} alt="image" className = {styles.image}/>
    </div>
  )
}

export default Hero