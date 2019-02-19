import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import Head from "next/head";

import ReactGA from "react-ga";

import PropTypes from "prop-types";

import "../styles/layout.scss";

const title = "sb: untraceable, sb, digital cash.";
const description =
  "sb is a different kind of cryptocurrency. It is cryptographically-secured, privacy-protected digital paper money; cryptocurrency you can actually use. Be the first to get sb when it launches.";

class Layout extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);

    this.handleScroll();

    //inicializa evento google analytics
    ReactGA.initialize("UA-128480092-1");
    ReactGA.pageview(window.location.pathname + window.location.search);

    //da suporte a imagens .png caso o formato .webp falhe
    Modernizr.on("webp", result => {
      if (!result) {
        this.setState({
          listImages: [
            "/static/images/block1.png",
            "/static/images/block2.png",
            "/static/images/block3.png",
            "/static/images/block4.png",
            "/static/images/block5.png"
          ]
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  }

  //dispara evento enviando para o google analytics quando encontra o final da pargina
  detectScrolledToBottom = () => {
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.offsetHeight;

    if (offset >= height - 50) {
      console.log("At the bottom");
    }

    if (offset === height) {
      ReactGA.event({
        category: "scroll",
        action: "scrolled to bottom"
      });
    }
  };

  //altera cor de fundo do menu quando passa na dobra da ultima sessão
  handleScroll = () => {
    const footer = document.getElementById("end-page");
    const header = document.getElementById("begin-page");
    const { offsetTop } = footer;
    if (
      document.documentElement.scrollTop > offsetTop - 50 ||
      document.body.scrollTop > offsetTop - 50
    ) {
      if (!header.classList.contains("end-page")) {
        header.classList.add("end-page");
      }
    } else {
      header.classList.remove("end-page");
    }
    this.detectScrolledToBottom();
  };

  render() {
    return (
      <div className="layout-content">
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
