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

// reactstrap components
import { Button, Container } from "reactstrap";

// core components
const headerImgPath = "https://ik.imagekit.io/ostlerfilmandphoto/Wedding/Shumway/IMG_7135_x5tD7Eckc.jpg?updatedAt=1641594607775";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url("+ headerImgPath + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Ostler Film & Photo</h1>
            <h3>Wedding | Portrait | Family</h3>
            <br />
            <a href="/#/contact">
              <Button color="warning" outline type="button" className="m-2 mt-4">
                    Book a Session
              </Button>
            </a>
            <a href="/#/gallery">
              <Button outline type="button" className="m-2 mt-4"
              onMouseOver={(e)=> {e.target.style.color = "gray"; e.target.style.backgroundColor = "white"}} color="white" style={{borderColor:"white"}}
              onMouseOut={(e)=> {e.target.style.color = "white"; e.target.style.backgroundColor = "transparent"}}
              >
                    See the Gallery
              </Button>
            </a>

          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
