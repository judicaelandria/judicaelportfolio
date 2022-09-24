import Head from "next/head";
import { seoDesc, seoTitle } from "../lib/constants";

export const SEO = () => {
  return (
    <Head>
      <title>{seoTitle}</title>
      <link rel="shortcut icon" href="/light-logo.png" type="image/png" />
      <meta content={seoDesc} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Judicaël Andriamahandry" />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:image" content="/light-logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@judicael_andria" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content="/light-logo.png" />
    </Head>
  );
};
