

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000/",
    production: "https://www.swarnajit.space/",
    //  production: "https://website-imgmodels-com-7fclnvh6aa-ue.a.run.app",
  }[process.env.NODE_ENV];

 
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <sitemap>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
     </sitemap>
  </sitemapindex>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
