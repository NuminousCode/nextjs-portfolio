import React from 'react'
import fs from 'fs'
import path from 'path'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from  '../components/Projects'
import About  from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Solutions from '../components/Solutions'
import styles from '../styles/home.module.css'

const Home = ({params}) => {
const imgUrls = params.imgUrls
  return (
    <div className={styles.containerMain} >
      <Hero data={imgUrls}/>
      <Solutions data={imgUrls}/>
      <Projects data={imgUrls}/>
      <About data={imgUrls}/>
      <Experience data={imgUrls}/>
      <Contact data={imgUrls}/>
      <Nav data={imgUrls}/>
    </div>
  )
}

export async function getStaticProps(){
const filePath = path.join(process.cwd(), 'data/cmsIds.json');
const fileContents = fs.readFileSync(filePath, 'utf8');
const imgIds = JSON.parse(fileContents);

  const imgUrls = [];
  const accessToken = 'tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8';
  const spaceId = 'vdnl4md1xpsv';

  for (const imgId of Object.values(imgIds[0])) {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/assets/${imgId}?access_token=${accessToken}`;
    
    try {
      const response = await fetch(url);
      const result = await response.json();
      imgUrls.push(result.fields.file.url);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const params = {imgUrls}

  return {
    props: {
      params
    },
  };
}

export default Home
