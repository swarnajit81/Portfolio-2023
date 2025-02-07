import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Meta = ({
  title = "Swarnajit | Creative Web Developer",
  keywords = "Swarnajit, Space, swarnajit, sj immersive, swarnajit space, web development, interactive design, creative coding, immersive web experiences, UI/UX design, frontend development, animations, performance optimization, digital artistry, abstract art, problem-solving, web animations, user experience, creative solutions, portfolio showcase, web canvas, independent developer, web aesthetics, artistic web design, engaging websites",
  imgContent = "/images/logo.png",
}) => {
  const router = useRouter();
  const description =
    "Passionate artist and web creator crafting immersive digital experiences with a focus on interaction, animations, and performance. With 4+ years of experience across various tech stacks, I bring refined, creative solutions to help enthusiasts and businesses push boundaries. Let’s collaborate to make something extraordinary.";
  return (
    <Head>
      <title>{title}</title>
      <meta name="AUTHOR" content={"swarnajit.space"} />
      <meta name="copyright" content={"swarnajit.space"} />

      <meta
        name="description"
        content={
          "Passionate artist and web creator crafting immersive digital experiences with a focus on interaction, animations, and performance. With 4+ years of experience across various tech stacks, I bring refined, creative solutions to help enthusiasts and businesses push boundaries. Let’s collaborate to make something extraordinary."
        }
      />
      <meta name="keywords" content={keywords} />

      {/* <!-- for Facebook -->           */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={imgContent} />

      <meta
        property="og:url"
        content={"https://swarnajit.space" + router.asPath}
      />
      <meta property="og:description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      {/* <!-- for Twitter -->           */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgContent} />
      <link
        rel="canonical"
        href={"https://swarnajit.space" + router.asPath?.split("?")[0]}
      />
    </Head>
  );
};

export default Meta;
