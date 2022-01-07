import React from "react";
import { Button, Container, Row, Col} from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";
import pricingData from "data/pricingData.js";
import faqData from "data/faqData.js";


function PricingPageContent(props){

    const pricingTableHTML = pricingData.map(item => {
        let pricingHTML;
        if(item.salePrice === ""){
            pricingHTML = (
                <>
                    <span className="ml-1" style={{textDecoration:"none", fontWeight:"lighter", fontSize:"110%"}}>{item.price}</span>
                </>
            )
        } else {
            pricingHTML = (
                <>
                    <span style={{textDecoration:"line-through", fontWeight:"lighter", fontSize:"100%"}}>{item.price}</span>
                    <span className="ml-1" style={{textDecoration:"none", fontWeight:"lighter", fontSize:"110%"}}>{item.salePrice}</span>
                </>
            )
        }

        return(
            <Col key={item.title} className="mb-4" style={{minWidth:"18em"}}>
                <h5 className="h5" style={{fontWeight: "500"}}>{item.title}</h5>
                <h6 className="pb-2" style={{top:"5px", borderBottom: "1px solid lightgray"}}>
                    {pricingHTML}
                </h6>
                <ul className="text-left pt-2" style={{listStyleType: "none", fontSize:"110%"}}>
                    {item.detailItems.map((detail, count) => {

                        return(
                            <li key={count} className="m-3">{detail}</li>
                        );
                    })}
                </ul>
            </Col>
    )});

    const faqTableHTML = faqData.map((item, count) => {
        return(
            <div key={count}>
                <p  className="h5" style={{fontSize:"130%"}}>{item.question}</p>
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
                    <div className="text-center pt-3" style={{fontWeight: "500"}}>
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
                    <div className="mt-5 pt-3" >
                        <h4 className="h4 mb-4">Frequently Asked Questions</h4>
                        <div >
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