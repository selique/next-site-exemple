import React from "react";

//import tamplate head, header, footer
import Layout from "../layout/layout";

import Subscribe from "../components/subscribe";

//invoca classNames condicionais
import cn from "@sindresorhus/class-names";

import ReactGA from "react-ga";

import Modernizr from "modernizr";

const listImages = [
  "/static/images/block1.webp",
  "/static/images/block2.webp",
  "/static/images/block3.webp",
  "/static/images/block4.webp",
  "/static/images/block5.webp"
];

class sbLandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listImages
    };
  }

  componentDidMount() {
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

  render() {
    const { listImages } = this.state;

    return (
      <Layout>
        <section className="home">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="home-heading">
                  <h1 className="home-heading__slogan">
                    Nosso negócio é fazer <br />o seu crescer!
                  </h1>
                  <p className="home-heading__desc">
                    Para todos os empreendedores que buscam uma experiência
                    melhor
                    <br />
                    com serviços financeiros, o SmartBank oferece soluções
                    transformadoras
                    <br />
                    e transparentes, em um modelo onde todos ganham.
                    <br />
                    <br />
                    Peça seu convite e faça parte desta transformação.
                  </p>
                  <div className="sb-cta">
                    <a className="sb-cta__btn">Peça seu convite</a>
                  </div>
                </div>
                <Subscribe />
                <div>
                  <span className="mouse">
                    <span className="mouse__wheel" />
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-6 col-xl-7 img-container">
                <img src={listImages[0]} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sb-block block-2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                <div className="sb-heading">Borderless. Stable</div>
                <p>
                  sb is a different kind of cryptocurrency. Like Bitcoin, it is
                  completely decentralized; nobody owns or controls sb. Unlike
                  Bitcoin however, sb is stable, so you can spend it on everyday
                  things.{" "}
                </p>
                <p>
                  People continue to choose paper money for the benefits of
                  privacy, control and autonomy, but it nervously sits under
                  mattresses, and can only travel through multiple hands. sb is
                  cryptographically-secured, privacy-protected digital paper
                  money - that you can instantly send across borders, not just
                  streets.
                </p>
                <p>
                  sb gives you anonymity and control, and complete freedom with
                  your money.
                </p>
              </div>
              <div className="col-12 col-md-5 col-lg-6 col-xl-7 img-container">
                <img src={listImages[1]} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sb-block block-3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                <div className="sb-heading">Autonomous monetary policy</div>
                <p>
                  Cryptocurrencies today are unuseable. You wouldn’t use
                  Bitcoin, or any coin, to buy a cup of coffee, or shop online.
                  Businesses don’t pay salaries or invoices in cryptocurrency
                  because they wouldn’t be accepted. And as for financial
                  services - offering a loan or taking a deposit in coin is a
                  gamble that few dare take.
                </p>
                <p>The stability of sb enables these use cases at scale.</p>
                <p>
                  Our AI scientists and economics researchers are working
                  together to develop an adaptive, self-learning,
                  self-adjusting, autonomous monetary policy that can weather
                  all market conditions, keeping the value of sb stable at all
                  times.
                </p>
              </div>
              <div className="col-12 col-md-5 col-lg-6 col-xl-7 img-container">
                <img src={listImages[2]} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sb-block block-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                <div className="sb-heading">Total privacy</div>
                <p>
                  Your entire payment history is public on the blockchain.
                  Transparency is one of the blockchain’s strongest ideals, but
                  in practice, visibility is a vulnerability. Currently, anyone
                  with an internet connection can find out how much money you
                  have, and what you spend it on.{" "}
                </p>
                <p>
                  sb provides a mechanism for legitimate exchange that also
                  safeguards your privacy.{" "}
                </p>
                <p>
                  At the core of sb is zero-knowledge cryptography. Your
                  transaction information, including sender, receiver, and
                  transaction value, is never exposed. sb is untraceable.
                </p>
              </div>
              <div className="col-12 col-md-5 col-lg-6 col-xl-7 img-container">
                <img src={listImages[3]} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sb-block block-5" id="sb-block-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                <div className="sb-heading">
                  sb is digital money you can actually use.
                </div>
                <p>
                  <ReactGA.OutboundLink
                    eventLabel="sb.clicked.footer.telegram"
                    to="https://t.me/ninja_org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sb"
                  >
                    <img src="/static/images/telegram.svg" alt="" />
                    Connect with us on Telegram
                  </ReactGA.OutboundLink>
                </p>
              </div>
              <div className="col-12 col-md-5 col-lg-6 col-xl-7 img-container">
                <img src={listImages[4]} alt="" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default sbLandingPage;
