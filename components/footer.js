import React from "react";
import Link from "next/link";
import background from "../assets/background-smartbank.svg.raw";
import logoSb from "../assets/smartbank-logo.svg.raw";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="end-page">
        <div className="bg" dangerouslySetInnerHTML={{ __html: background }} />
        <div className="footer-box">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <ul className="footer-box_links">
                  <li className="footer-box_links-bold">
                    <a>Sobre nós</a>
                  </li>
                  <li className="footer-box_links">
                    <Link href="/quem-somos">
                      <a>Quem somos</a>
                    </Link>
                  </li>
                  <li className="footer-box_links">
                    <a>Políticas</a>
                  </li>
                  <li className="footer-box_links">
                    <a>Linkedin</a>
                  </li>
                </ul>
              </div>
              <div className="col-2">
                <ul className="footer-box_links">
                  <li className="footer-box_links-bold">
                    <a>Ajuda</a>
                  </li>
                  <li className="footer-box_links">
                    <a>Central de Ajuda</a>
                  </li>
                  <li className="footer-box_links">
                    <a>Fale Conosco</a>
                  </li>
                  <li className="footer-box_links">
                    <a>Ouvidoria</a>
                  </li>
                </ul>
              </div>
              <div className="col-4" />
              <div className="col-4">
                <div
                  className="footer-box-logo"
                  dangerouslySetInnerHTML={{ __html: logoSb }}
                />
              </div>
            </div>
            <div className="row rodape">
              <p className="rodape-rights">
                @2019 Banco SmartBank S.A. Todos os direitos reservados
              </p>
              <span className="rodape-termos">
                <a>Termos de Uso</a>
                &nbsp;|&nbsp;
                <a>Segurança</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
