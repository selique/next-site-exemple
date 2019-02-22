import React from "react";

//import tamplate head, header, footer
import Layout from "../layout/layout";

import SubscribeBanner from "../components/subscribe-banner";

import Modernizr from "modernizr";

class QuemSomos extends React.Component {
  render() {
    return (
      <Layout>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>
                  #1 Plataforma Bancária
                  <br />
                  100% Digita l do Brasil
                </h1>
                <p>
                  O SmartBank tem grande compromisso com a segurança e a
                  privacidade de informações coletadas dos usuários de serviços
                  interativos aqui disponíveis. Investidores e analistas podem
                  visitar este website e conhecer os serviços que o Banco BI&P
                  oferece, ler relatórios, obter informações e notícias, sem
                  fornecer informações pessoais. Caso você em algum momento
                  voluntariamente forneça alguma informação, veja abaixo como o
                  SmartBank coleta e trata suas informações individuais. Estas
                  práticas estão sujeitas a alterações, sem prévio aviso, para
                  adaptá-las às necessidades surgidas com a evolução das
                  ferramentas utilizadas
                  <br />
                  caso você em algum momento voluntariamente forneça alguma
                  informação, veja abaixo como o SmartBank coleta e trata suas
                  informações individuais. Estas práticas estão sujeitas a
                  alterações, sem prévio aviso, para adaptá-las às necessidades
                  surgidas com a evolução das ferramentas utilizadas aso você em
                  algum momento voluntariamente forneça alguma informação, veja
                  abaixo como o SmartBank coleta e trata suas informações
                  individuais. Estas
                </p>
              </div>
            </div>
          </div>
        </section>
        <SubscribeBanner />
      </Layout>
    );
  }
}

export default QuemSomos;
