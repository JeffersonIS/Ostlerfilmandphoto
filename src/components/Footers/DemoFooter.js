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
/*eslint-disable*/
import React from "react";
import "../componentStyle.css"
// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white" id="footer">
      <Container>
        <Row>
          <nav className="footer-nav footer-nav-mobile">
            <ul>
              <li>
                <a href="/#/pricing" >
                  Pricing
                </a>
              </li>|
              <li>
                <a href="/#/contact">
                Book Now
                </a>
              </li>|
              <li>
                <a href="https://www.facebook.com/Ostler-Film-and-Photo-104315925157843"
                  title="Like us on Facebook"
                  target="_blank">
                  <i className="fa fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ostlerfilmandphoto"
                  title="Follow us on Instagram"
                  target="_blank">
                   <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} Made by Jefferson Ostler / Creative Tim
            </span> <br></br>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
