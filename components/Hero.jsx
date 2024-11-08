import React from 'react'  
import { useState, useEffect } from 'react'
import Menu from './Menu'
import Head from 'next/head'
import styles from '../styles/Hero.module.css'
import useDynamicFontSize from '../helpers/dynamicFontSize'
import useDynamicLineHeight from '../helpers/dynamicLineHeight'

const Hero = (data) => {

  const [imageLoaded, setImageLoaded] = useState(false)
  // Image URL extraction
  const imgUrl = data.data[0]

  const formatedCmsUrl = data
  ? `${imgUrl}?fm=webp&w=2000&h=3000`
  : null;

  // Custom hooks
  useDynamicFontSize([`.${styles.slogan}`], 20, 100, 0.052);
  useDynamicLineHeight([`.${styles.slogan}`], 0.03);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const image = new Image();
    image.onload = handleImageLoad;
    image.src = formatedCmsUrl;

    return () => {
      image.onload = null;
    };
  }, [formatedCmsUrl]);

  
  return (
    <>
      <Head>
        <link rel="preload" href={formatedCmsUrl} as="image" />
        <link rel="preload" href="../styles/Hero.module.css" as="style" />
      </Head>
      <div className={styles.containerMain}>
        <div className={styles.header}>
          <div className={styles.logo}>G.S</div>
        </div>
        <div className={styles.slogan}>MODERN WEB DEVELOPMENT</div>
        <Menu />
        <img src={formatedCmsUrl} alt="image" className={styles.image} />
      </div>
    </>
  );
}

export default Hero