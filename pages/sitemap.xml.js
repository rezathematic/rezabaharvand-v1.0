const EXTERNAL_DATA_URL = "https://rezabaharvand.herokuapp.com";
function generateSiteMap(posts) {
  console.log(posts);
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
         xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://rezabaharvand.dev</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://rezabaharvand.dev/blog</loc>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
     ${posts
       .map(({ slug, updated_at }) => {
         return `
       <url>
           <loc>${`https://rezabaharvand.dev/blog/${slug}`}</loc>
           <lastmod>${updated_at}</lastmod>
           <priority>1.0</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${EXTERNAL_DATA_URL}/posts`);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
