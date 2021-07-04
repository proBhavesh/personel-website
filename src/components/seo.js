import React from "react";
import Head from "next/head";

export default function SEO({
  description = "We help small businesses and startups to develop websites for their business with a team of world-class developers to bring your vision to life",
  author = "Bhavesh Choudhary",
  meta,
  title = "Bhavesh Choudhary",
  crispScript = 'window.$crisp=[];window.CRISP_WEBSITE_ID="9846ec39-aea0-4960-a0ce-06fe6a20f995";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();',
}) {
  const metaData = [
    {
      name: `description`,
      content:
        "We help small businesses and startups to develop websites for their business with a team of world-class developers to bring your vision to life",
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content:
        "We help small businesses and startups to develop websites for their business with a team of world-class developers to bring your vision to life",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content:
        "We help small businesses and startups to develop websites for their business with a team of world-class developers to bring your vision to life",
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <script type="text/javascript">{crispScript}</script>
      <meta name="p:domain_verify" content="c78ad6f2d76a6c0274374c7ff7774457" />
      <meta
        name="google-site-verification"
        content="goG2RV72oRydCQaxXvLFzcmQkIyCXwKep7HMAVGG_YY"
      />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
