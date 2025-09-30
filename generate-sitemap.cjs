const { SitemapStream, streamToPromise } = require("sitemap");
const { writeFileSync } = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://www.boostybites.in" });

  const pages = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about_us", changefreq: "weekly", priority: 0.8 },
    { url: "/contact_us", changefreq: "monthly", priority: 0.7 },
    { url: "/chocolates", changefreq: "weekly", priority: 0.9 },
    { url: "/products", changefreq: "weekly", priority: 0.9 },
    { url: "/terms&condition", changefreq: "yearly", priority: 0.5 },
    { url: "/testimonial", changefreq: "monthly", priority: 0.6 },
    { url: "/returnpolicy", changefreq: "yearly", priority: 0.5 },
    { url: "/shippingpolicy", changefreq: "yearly", priority: 0.5 },
    { url: "/faq", changefreq: "monthly", priority: 0.6 },
  ];

  // Pages ko stream me write karo
  pages.forEach(page => sitemap.write(page));

  // Stream close karo
  sitemap.end();

  // Stream ko promise me convert karke XML generate karo
  const xml = await streamToPromise(sitemap);

  // XML ko public folder me save karo
  writeFileSync("./public/sitemap.xml", xml.toString());
  console.log("Sitemap generated successfully at /public/sitemap.xml");
}

generateSitemap();
