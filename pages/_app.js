import { NextSeo } from "next-seo";
import "./_app.css";

export default ({ Component, pageProps }) => (
  <>
    <NextSeo
      title="Franco"
      canonical="https://scucchiero.com"
      openGraph={{
        url: "https://scucchiero.com",
        title: "Franco",
        site_name: "Franco",
      }}
    />
    <Component {...pageProps} />
  </>
);

