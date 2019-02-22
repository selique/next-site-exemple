import React from "react";
import Link from "../components/active-link";

import ReactGA from "react-ga";

import PropTypes from "prop-types";
//invoca classNames condicionais
import cn from "@sindresorhus/class-names";

//images
import logoSb from "../assets/smartbank-logo.svg.raw";

class Header extends React.Component {
  //declara construtor states defaults
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
  }

  //abre e fecha menu utilizando o 'cn'
  toggleShowMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  };

  render() {
    //passa props dos states para variaveis
    const { showMenu } = this.state;

    return (
      <header className="sb-header" id="begin-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sb-logo">
                <Link activeClassName="active" href="/">
                  <a>
                    <div dangerouslySetInnerHTML={{ __html: logoSb }} />
                  </a>
                </Link>
              </div>
              <div onClick={this.toggleShowMenu} className="sb-hamburger">
                <div id="nav-icon" className={cn({ open: showMenu })}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <nav className={cn("sb-menu", { show: showMenu })}>
                <ul className="nav">
                  <li>
                    <Link activeClassName="active" href="/quem-somos">
                      <a>Quem somos</a>
                    </Link>
                  </li>
                  <li>
                    {/* envia evento quando clica na area de recrutamento */}
                    <ReactGA.OutboundLink
                      eventLabel="sb.clicked.header.ninja-recruiting"
                      to="https://hivebr.workable.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Carreiras
                    </ReactGA.OutboundLink>
                  </li>
                  <li>
                    <a>Ajuda</a>
                  </li>
                  <li className="sb-cta">
                    <a className="sb-cta__btn">Peça seu convite</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
