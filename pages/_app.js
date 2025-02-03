import Cursor from "@components/CustomCursor";
import Layout from "../components/layout";
import "../styles/globals.css";
import GlobalState from "@context/GlobalState";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Layout>
        <Cursor />
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </GlobalState>
  );
}

export default MyApp;
