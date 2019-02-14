import React from "react";
import Link from "next/link";
import ReactGA from "react-ga";

import PropTypes from "prop-types";
//invoca classNames condicionais
import cn from "@sindresorhus/class-names";

//images
import logoSb from "../assets/smartbank-logo.svg.raw";
import humburgerIcon from "../assets/hamburger.svg.raw";

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
      <header className="sb-header" id="sb-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sb-logo">
                <Link href="/">
                  <a>
                    <div dangerouslySetInnerHTML={{ __html: logoSb }} />
                  </a>
                </Link>
              </div>
              <div
                onClick={this.toggleShowMenu}
                className="sb-hamburger"
                dangerouslySetInnerHTML={{ __html: humburgerIcon }}
              />

              <div className={cn("sb-menu", { show: showMenu })}>
                <ul>
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
                    <Link href="convite">
                      <a className="btn-sb">Peça seu Convite</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
