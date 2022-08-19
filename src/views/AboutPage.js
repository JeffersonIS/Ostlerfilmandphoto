import React from "react";
import DemoFooter from "components/Footers/DemoFooter";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import AboutPageContent from "components/AboutPageContent.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Container, Row, Col} from "reactstrap";
import Gallery from "react-photo-gallery";
import PageTitle from "components/PageTitle";
import ContactMethods from "components/ContactForm/ContactMethods";


function AboutPage() {

  const photo1 = [{src: "https://ik.imagekit.io/ostlerfilmandphoto/Other/Amber_Jefferson_JjZOhlIAA.jpg",
                    width: 2048,
                    height: 1365
                    }];

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div>
      <IndexNavbar/>
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Wedding/Shumway/IMG_8023_l0pTznAvLc8o.jpg?updatedAt=1641597903225"/>

      <div className="section profile-content">
            <Container
                style={{
                    transform: "translate(0,-8em)",
                }}>
                <PageTitle title="Meet Us" />

                <div className="text-left pt-2">
                    <Row>
                        <Col md={7} className="pt-2">
                        <div style={{fontSize:"100%"}}>
                            <p style={{fontSize:"120%", fontWeight: "500"}}>&emsp; Hi! We are the Ostlers and our dream is to create timeless photos that you will love -- FOREVER. Our style is fun, light, and warm, making for engaging photoshoots and authentic results. Based in Provo, Utah, we met in college and were married a few years later in 2020. Yep, we were one of those COVID couples!</p>
                            <p style={{fontSize:"120%", fontWeight: "500"}}>&emsp; We both studied Information Systems, from which Amber graduated with a BS this year and Jefferson will graduate with a master's next year. When we're not behind the camera you can probably find us cooking, with family, outdoors, or watching a movie. We are honored by your interest and beyond excited to capture your most important life events!
                                Visit the <a href="/contact" style={{fontWeight: "500"}}>Book Now</a> page to get started!</p>
                            <br></br>
                            <p style={{fontSize:"120%", fontWeight: "500"}}>Sincerely,</p>
                            <p style={{fontSize:"120%", fontWeight: "500"}}>Jefferson and Amber</p>
                        </div>
                        </Col>
                        <Col md={5}>
                            <div className="text-center pt-4">
                                <Gallery photos={photo1}/>
                            </div>
                        </Col>
                    </Row>
                </div>

                <ContactMethods/>
            </Container>
        </div>

      <DemoFooter/>
    </div>
  );
}

export default AboutPage;