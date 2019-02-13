import React from 'react';
import Link from 'next/link';
import ReactGA from 'react-ga';

import PropTypes from 'prop-types';
//invoca classNames condicionais
import cn from '@sindresorhus/class-names';

//images
import logoC from '../assets/logo-C.svg.raw';
import humburgerIcon from '../assets/hamburger.svg.raw';

class Header extends React.Component {

  //declara construtor states defaults
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  //abre e fecha menu utilizando o 'cn'
  toggleShowMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    //passa props dos states para variaveis
    const { showMenu } = this.state;

    return (
      <header className="landing-page-constant-header" id="landing-page-constant-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="landing-page-constant-logo">
                <Link href="/">
                  <a><div dangerouslySetInnerHTML={{ __html: logoC }} /></a>
                </Link>
              </div>
              <div onClick={this.toggleShowMenu} className="landing-page-constant-hamburger" dangerouslySetInnerHTML={{ __html: humburgerIcon }} />

              <div className={
                cn(
                  'landing-page-constant-menu',
                  { show: showMenu },
                )
              }
              >
                <ul>
                  <li>
                    {/* envia evento quando clica na area de recrutamento */}
                    <ReactGA.OutboundLink
                      eventLabel="constant.clicked.header.ninja-recruiting"
                      to="https://ninja.org/recruiting?project=Constant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-constant"
                    >
                      Join the Constant team
                      </ReactGA.OutboundLink>
                  </li>
                  <li>
                    <Link href="contato">
                      <a>contato</a>
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