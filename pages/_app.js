import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      
    </Layout>
    
  )
}

export default MyApp
