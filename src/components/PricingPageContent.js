import React from "react";
import { Button, Container, Row, Col} from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";
import pricingData from "data/pricingData.js";
import faqData from "data/faqData.js";


function PricingPageContent(props){

    const pricingTableHTML = pricingData.map(item => {
        return(
            <Col className="mb-4" style={{minWidth:"18em"}}>
                <h5 className="h5">{item.title}</h5>
                <h6 className="pb-2"
                    style={{top:"5px", borderBottom: "1px solid lightgray"}}>
                {item.price}
                </h6>
                <ul className="text-left pt-2" style={{listStyleType: "none", fontSize:"110%"}}>
                    {item.detailItems.map((detail) => {

                        return(
                            <li className="m-3">{detail}</li>
                        );
                    })}
                </ul>
            </Col>
    )});

    const faqTableHTML = faqData.map(item => {
        return(
            <div>
                <p className="h5" style={{fontSize:"130%"}}>{item.question}</p>
                <p className="pb-4" style={{fontSize:"110%"}} >{item.answer}</p>
            </div>
        )
    })

    return (
        <>
            <div className="section profile-content">
            <Container
                style={{
                    transform: "translate(0,-8em)",
                }}>
                <div className="text-center">
                <h1 style={{color:"white", marginBottom:"1.3em"}}>Pricing</h1>
                </div>
                    <div className="text-center pt-3">
                        <Row>
                        {pricingTableHTML}
                        </Row>
                    </div>
                    <div className="text-center mt-1">
                        <Row>
                            <Col>
                                <a href="/#/contact">
                                    <Button color="warning" outline type="button"
                                        className="m-2 mt-4" style={{minWidth: "20em"}}>
                                        Book Now
                                    </Button>
                                </a>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-5 pt-3">
                        <h4 className="h4 mb-4">Frequently Asked Questions</h4>
                        <div>
                            {faqTableHTML}
                        </div>
                    </div>
                </Container>
            </div>
            <DemoFooter />
        </>
        );
}

export default PricingPageContent;