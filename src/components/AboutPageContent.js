import React from "react";
import { Container, Row, Col} from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";
import Gallery from "react-photo-gallery";


function AboutPageContent(props){
    const photo1 = [{src: "https://ik.imagekit.io/ostlerfilmandphoto/Other/Amber_Jefferson_JjZOhlIAA.jpg",
                    width: 2048,
                    height: 1365
                    }]
    // const photo2 = [{src: "https://ik.imagekit.io/ostlerfilmandphoto/Other/IMG-0108_8h31X92HY.JPG",
    //                 width: 1538,
    //                 height: 2048
    //                 }]

    return (
        <>
            <div className="section profile-content">
            <Container
                style={{
                    transform: "translate(0,-8em)",
                }}>
                <div className="text-center">
                    <h1 style={{color:"white", marginBottom:"1.3em"}}>Meet Us</h1>
                </div>
                <div className="text-left pt-2">
                    <Row>
                        <Col md={7} className="pt-2 pl-5 pr-5">
                        <div style={{fontSize:"100%"}}>
                            <p style={{fontSize:"120%"}}>&emsp; Hi! We are the Ostlers and our dream is to create timeless photos that you will love -- FOREVER. Our style is fun, light, and warm, making for engaging photoshoots and authentic results. Based in Provo, Utah, we met in college and were married a few years later in 2020. Yep, we were one of those COVID couples!</p>
                            <p style={{fontSize:"120%"}}>&emsp; We both studied Information Systems, from which Amber graduated with a BS this year and Jefferson will graduate with a master's next year. When we're not behind the camera you can probably find us cooking, with family, outdoors, or watching a movie. We are honored by your interest and beyond excited to capture your most important life events!
                                Visit the Contact page to get started!</p>
                            <br></br>
                            <p style={{fontSize:"120%"}}>Sincerely,</p>
                            <p style={{fontSize:"120%"}}>Jefferson and Amber</p>
                        </div>
                        </Col>
                            <Col md={5}>
                                <div className="text-center pt-4">
                                    {/* <Gallery photos={photo2}/> */}
                                    <Gallery photos={photo1}/>
                                </div>
                            </Col>
                    </Row>
                </div>
            </Container>
            </div>
            <DemoFooter />
        </>
        );
}

export default AboutPageContent;