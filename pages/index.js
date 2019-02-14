import React from "react";

//import tamplate head, header, footer
import Layout from "../layout/layout";

import PropTypes from "prop-types";
//invoca classNames condicionais
import cn from "@sindresorhus/class-names";

import { Formik } from "formik";
import axios from "axios";
import ReactGA from "react-ga";
import Modernizr from "modernizr";
import Link from "next/link";

import { MoonLoader } from "react-spinners";

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
      hasSubscribed: false,
      listImages
    };
  }

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
    const block5div = document.getElementById("sb-block-5");
    const header = document.getElementById("sb-header");
    const { offsetTop } = block5div;
    if (
      document.documentElement.scrollTop > offsetTop - 50 ||
      document.body.scrollTop > offsetTop - 50
    ) {
      if (!header.classList.contains("block5")) {
        header.classList.add("block5");
      }
    } else {
      header.classList.remove("block5");
    }
    this.detectScrolledToBottom();
  };

  //dispara form de email
  handleSubmit = (values, setSubmitting) => {
    const name = "sb";
    const { email: emailSub } = values;
    const formData = new FormData();
    formData.set("email", emailSub);
    formData.set("product", name);

    //dispara evento para o google anlytics quando form de email é enviado com sucesso
    ReactGA.event({
      category: "social",
      action: "submit subscribe",
      value: emailSub
    });

    axios({
      method: "POST",
      url: `https://ninja.org/api/user/subscribe`,
      data: formData
    })
      .then(() => {
        this.setState({ hasSubscribed: true }, () => {
          setSubmitting(false);
        });
        //dispara evento para o google anlytics quando form de email é enviado com sucesso
        ReactGA.event({
          category: "social",
          action: "submit subscribe success",
          value: emailSub
        });
      })
      .catch(err => {
        console.log("err subscribe email", err);
        setSubmitting(false);
        //dispara evento para o google anlytics quando form de email é enviado com com erro
        ReactGA.event({
          category: "social",
          action: "submit subscribe failed",
          value: emailSub
        });
      });
  };

  render() {
    const { hasSubscribed, listImages } = this.state;

    return (
      <Layout>
        <section className="sb-block block-1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-6 col-xl-5 project-detail">
                <div className="sb-heading">
                  sb
                  <div className="slogan">
                    Untraceable, stable, digital cash.
                  </div>
                </div>
                <p style={{ marginTop: "38px", fontWeight: "bold" }}>
                  Receive curated development and community updates.
                </p>
                {!hasSubscribed ? (
                  <Formik
                    initialValues={{ email: "" }}
                    validate={values => {
                      let errors = {};
                      if (!values.email) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        this.handleSubmit(values, setSubmitting);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="sb-subscribe">
                          <input
                            placeholder="Enter your email address"
                            className="form-control sb-subscribe-input has-error"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <span className="w-100 text-danger text-left">
                              <span>{errors.email}</span>
                            </span>
                          )}
                          <button
                            type="submit"
                            className="btn-sb"
                            disabled={isSubmitting}
                          >
                            {!isSubmitting ? (
                              "Submit"
                            ) : (
                              <MoonLoader
                                sizeUnit={"px"}
                                size={18}
                                color={"#fff"}
                                loading={true}
                              />
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                ) : (
                  <h5>
                    <strong className="text-success">
                      Thank you for subscribing!
                    </strong>
                  </h5>
                )}
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
                  sb is a different kind of cryptocurrency. Like Bitcoin,
                  it is completely decentralized; nobody owns or controls
                  sb. Unlike Bitcoin however, sb is stable, so you
                  can spend it on everyday things.{" "}
                </p>
                <p>
                  People continue to choose paper money for the benefits of
                  privacy, control and autonomy, but it nervously sits under
                  mattresses, and can only travel through multiple hands.
                  sb is cryptographically-secured, privacy-protected
                  digital paper money - that you can instantly send across
                  borders, not just streets.
                </p>
                <p>
                  sb gives you anonymity and control, and complete freedom
                  with your money.
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
                <div className="sb-heading">
                  Autonomous monetary policy
                </div>
                <p>
                  Cryptocurrencies today are unuseable. You wouldn’t use
                  Bitcoin, or any coin, to buy a cup of coffee, or shop online.
                  Businesses don’t pay salaries or invoices in cryptocurrency
                  because they wouldn’t be accepted. And as for financial
                  services - offering a loan or taking a deposit in coin is a
                  gamble that few dare take.
                </p>
                <p>
                  The stability of sb enables these use cases at scale.
                </p>
                <p>
                  Our AI scientists and economics researchers are working
                  together to develop an adaptive, self-learning,
                  self-adjusting, autonomous monetary policy that can weather
                  all market conditions, keeping the value of sb stable at
                  all times.
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
                  sb provides a mechanism for legitimate exchange that
                  also safeguards your privacy.{" "}
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
        <script
          type="text/javascript"
          src="https://c.la2-c1-ph2.salesforceliveagent.com/content/g/js/45.0/deployment.js"
        />
        <script type="text/javascript">
          liveagent.init('https://d.la2-c1-ph2.salesforceliveagent.com/chat',
          '5721U000000QMOi', '00D1U000000yIYd');
        </script>
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
