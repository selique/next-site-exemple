import React from "react";

//import tamplate head, header, footer
import Layout from "../layout/layout";

import Subscribe from "../components/subscribe";
import SubscribeCta from "../components/subscribe-cta";

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
                  <h1>
                    Nosso negócio é fazer <br />o seu crescer!
                  </h1>
                  <p>
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
                  <SubscribeCta />
                  <p className="home-slogan">
                    #1 plataforma bancária
                    <br />
                    <span>100% digital do Brasil</span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-6 col-xl-7 img-container">
                <img src={listImages[0]} alt="" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default sbLandingPage;
