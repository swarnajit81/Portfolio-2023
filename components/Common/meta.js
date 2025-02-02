import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Meta = ({ title, keywords, description, imgContent }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      {/* <meta name="AUTHOR" content={"swarnajit.com"} /> */}
      {/* <meta name="copyright" content={"mediaslide.com"} /> */}
      {/* for Google */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* <!-- for Facebook -->           */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={imgContent} />
      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
      />
      <meta property="og:description" content={description} />

      {/* <!-- for Twitter -->           */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgContent} />
      <link rel="canonical" href= {"https://specto.pl" + router.asPath?.split("?")[0]} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "",
  keywords: "",
  description: "",
  imgContent: process.env.NEXT_PUBLIC_DOMAIN + "/images/s.svg",
};

export default Meta;
