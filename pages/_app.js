import Cursor from '@components/CustomCursor'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  <Layout> <Cursor /> <Component {...pageProps} /></Layout>
}

export default MyApp
