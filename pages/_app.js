import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return(
    <>  
    
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
