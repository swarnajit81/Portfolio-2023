import Cursor from '@components/CustomCursor'
import Layout from '../components/layout'
import '../styles/globals.css'
import GlobalState from '@context/GlobalState'

function MyApp({ Component, pageProps }) {
  return  <GlobalState>  <Layout><Cursor /> <Component {...pageProps} /></Layout></GlobalState>
}

export default MyApp
