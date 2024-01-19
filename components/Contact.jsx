import React from 'react'
import styles from '../styles/Contact.module.css'
import useDynamicIconSize from '../helpers/dynamicIconSize'
import Form from '../components/Form'

const Contact = (data) => {
    const imgUrl = data.data[28]
    const cloudflareUrl = data.data[32]
    useDynamicIconSize([`.${styles.cfIcon}`], 300, 20, 0.02);
  return (
    <div className = {styles.containerMain} id="contact">
      <div className = {styles.contactAnchor}></div>
        <div className = {styles.title}>Contact</div>
          <div className ={styles.containerInner}>
            <Form />
            <div className = {styles.contactInfo}>
              <div className = {styles.contactItem}>email · contact@gerardosanchez.dev</div>
              <div className = {styles.contactItem}>tel · 619-763-2197</div>
              <div className = {styles.contactItem}>loc · Katy, TX</div>
            </div>
          </div>
          <div className ={styles.footer}>
            <div className = {styles.copyright}>© 2023 Magis Web Services. All Rights Reserved.</div>
            <div className = {styles.hosted}>Hosted on cloudflare <img src={cloudflareUrl} alt="" className = {styles.cfIcon}/></div>
          </div>
      <img src={imgUrl} alt="" className = {styles.image}/>
    </div>
  )
}

export default Contact
