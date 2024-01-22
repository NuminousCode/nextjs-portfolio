// Main entry point for all pages 
import dotenv from 'dotenv';
dotenv.config();
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
