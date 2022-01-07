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

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [marginTopValue, setMarginTopValue] = React.useState("-25px")

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 130 ||
        document.body.scrollTop > 130
      ) {
        setMarginTopValue("0px")
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 131 ||
        document.body.scrollTop < 131
      ) {
        setNavbarColor("navbar-transparent");
        setMarginTopValue("-25px")
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  //Documentation Link: https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar}
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg" style={{marginTop: marginTopValue}}>

      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/#/"
            title="Company Name"
          >
             {/* <img src={white_logo} className="m-0 p-0" style={{height:"10em", width:"10em"}}></img> */}
          <div className="text-center">
            <i className="nc-icon nc-camera-compact" style={{opacity:".7"}}></i>
              <p style={{fontSize:"85%"}} className="ml-2 mb-0"> Ostler Film & Photo</p>
          </div>
          </NavbarBrand>
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
                href="/#/gallery"
              >
                Gallery
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/#/pricing"
              >Pricing
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/#/contact"
              >Contact
              </NavLink>
            </NavItem>

            <NavItem className="mr-5">
              <NavLink
                href="/#/about"
              >About
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
                href="https://www.instagram.com/ostlerfilmandphoto"
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
