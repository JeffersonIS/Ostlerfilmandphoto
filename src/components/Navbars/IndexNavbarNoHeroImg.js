/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import "../../components/componentStyle.css"
import {ReactComponent as WhiteLogoIcon} from '../../assets/img/white-logo.svg'
import {ReactComponent as GreyLogoIcon} from '../../assets/img/grey-logo.svg'

function IndexNavbar() {
  const [navbarColor] = React.useState("");
  const [showWhiteLogo] = React.useState(false);
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [marginTopValue] = React.useState("0px");

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  //Documentation Link: https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar}
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg" style={{marginTop: marginTopValue}}>

      <Container>
        <div className="navbar-translate">
          <div className="text-center brand-logo" >
            <a href="/" title="Company Name">
            {showWhiteLogo && (<WhiteLogoIcon className="white-svg" width={60} height={60}/>)}
            {!showWhiteLogo && (<GreyLogoIcon className="grey-svg"  width={60} height={60}/>)}
            </a>
          </div>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/gallery"
              >
                Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/pricing"
              >Pricing
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/contact"
              >Book Now
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                href="/reviews"
              >Reviews
              </NavLink>
            </NavItem>

            <NavItem className="mr-5">
              <NavLink
                href="/about"
              >Meet Us
              </NavLink>
            </NavItem>

            {/* ------ ICON SECTION ------ */}

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/Ostler-Film-and-Photo-104315925157843"
                title="Like us on Facebook"
                target="_blank"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/jeffersonostlerfilms"
                title="Follow us on Instagram"
                target="_blank"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
