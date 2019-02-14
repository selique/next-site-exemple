import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import Head from "next/head";

import "../styles/layout.scss";

const title = "sb: untraceable, sb, digital cash.";
const description =
  "sb is a different kind of cryptocurrency. It is cryptographically-secured, privacy-protected digital paper money; cryptocurrency you can actually use. Be the first to get sb when it launches.";

export default ({ children }) => (
  <div className="layout-content">
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/icons/safari-pinned-tab.svg"
        color="#0a2240"
      />
      <meta name="msapplication-TileColor" content="#0a2240" />
      <meta name="theme-color" content="#0a2240" />
      <meta property="og:url" content="https://sb.money" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://sb.money/static/images/preview.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ninjadotorg" />
      <meta name="twitter:creator" content="@ninjadotorg" />
      <link rel="stylesheet" href="https://use.typekit.net/bro5hwc.css" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
