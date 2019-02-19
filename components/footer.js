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
                    <Link>
                      <a>Sobre nós</a>
                    </Link>
                  </li>
                  <li className="footer-box_links">
                    <Link>
                      <a>Quem somos</a>
                    </Link>
                  </li>
                  <li className="footer-box_links">
                    <Link>
                      <a>Políticas</a>
                    </Link>
                  </li>
                  <li className="footer-box_links">
                    <Link>
                      <a>Linkedin</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-2">
                <ul className="footer-box_links">
                  <li className="footer-box_links-bold">
                    <Link>
                      <a>Ajuda</a>
                    </Link>
                  </li>
                  <li className="footer-box_links">
                    <Link>
                      <a>Central de Ajuda</a>
                    </Link>
                  </li>
                  <li className="footer-box_links">
                    <Link>
                      <a>Fale Conosco</a>
                    </Link>
                  </li>
                  <li className="footer-box_links">
                    <Link>
                      <a>Ouvidoria</a>
                    </Link>
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
              <p className="rodape-rights">@2019 Banco SmartBank S.A. Todos os direitos reservados</p>
              <span className="rodape-termos">
                <Link>
                  <a>Termos de Uso</a>
                </Link>
                &nbsp;|&nbsp;                
                <Link>
                  <a>Segurança</a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
