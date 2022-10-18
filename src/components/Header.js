import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';
import Bee from './Bee';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    const { activeLink } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
            href="/#"
          >
            <Bee /> {config.subHeading}
          </a>

          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-center mx-auto">
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'home' ? '' : ''
                }`}
              >
                <Link className="nav-link text-uppercase text-expanded" to="#navbarResponsive">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'about' ? '' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="#Bee-Removal-Relocation"
                >
                  Bee Removal & Relocation
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'products' ? '' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="#Beekeeper-Services"
                >
                  Beekeeper Services
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'store' ? '' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="#Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
