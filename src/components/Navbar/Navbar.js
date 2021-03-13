import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SmoothScroll = () => {
  return (
    <section>
      <div className="navbar-fixed">
        <nav className="purple">
          <div className="container">
            <div class="nav-wrapper">
              <AnchorLink href="!#" class="brand-logo">
                FitLanka
              </AnchorLink>
              <AnchorLink
                href="!#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i class="material-icons">menu</i>
              </AnchorLink>
              <ul class="right hide-on-med-and-down">
                <li>
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#search">Search</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#explore">Explore</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#traines">Trainers</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#articles">Articles</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-demo">
       
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#search">Search</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#explore">Explore</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#trainers">Trainers</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#articles">Articles</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </section>
  );
};

class Navbar extends Component {
  render() {
    return (
      <section>
        <SmoothScroll />
      </section>
    );
  }
}

export default Navbar;
