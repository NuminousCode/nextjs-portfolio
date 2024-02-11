import React from 'react'
import Head from 'next/head'
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

// Home page
const Home = ({params}) => {
const imgUrls = params.imgUrls
  return (
    <div className={styles.containerMain} >
      <Head>
      <link rel="icon" href="/GS.png" type="image/png"/>
      <title>GerardoSanchez.dev</title>
      </Head>
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

// Build time data fetch for static generation
export async function getStaticProps(){
  // Path to Contentful asset IDs JSON file
const filePath = path.join(process.cwd(), 'data/cmsIds.json');
// Read and parse JSON file 
const fileContents = fs.readFileSync(filePath, 'utf8');
const imgIds = JSON.parse(fileContents);
const imgUrls = [];
// Retrieve access token and space ID from environment variables
const accessToken = process.env.ACCESS_TOKEN;
const spaceId = process.env.SPACE_ID;

// Iterate over image IDs, fetch each Contentful image URL, and add it to the imgUrls array
  for (const imgId of Object.values(imgIds[0])) {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/assets/${imgId}?access_token=${accessToken}`;
    
    try {
      // Fetch Contentful image data
      const response = await fetch(url);
      const result = await response.json();
       // Extract the image URL and add it to imgUrls array
      imgUrls.push(result.fields.file.url);
      // Error handling
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

   // Prepare the image URLs to be passed as props to the page component
  const params = {imgUrls}

   // Return the image URLs as props
  return {
    props: {
      params
    },
  };
}

export default Home
