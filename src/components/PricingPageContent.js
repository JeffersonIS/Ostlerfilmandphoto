import React from "react";
import { Container, Row, Col } from "reactstrap";
import PageTitle from "./PageTitle";
import photoPricingData from "data/photoPricingData.js";
import videoPricingData from "data/videoPricingData.js";
import { FcFeedback, FcPhone, FcCompactCamera, FcCollaboration, FcDiploma2 } from "react-icons/fc";
import  BookNowButton  from "components/BookNowButton.js";
import "components/componentStyle.css";
import PhotoVideoToggle from "./PhotoVideoToggle";
import { useHistory } from "react-router-dom"; 


function PricingPageContent(props){
    let pricingData;
    let history = useHistory();  
    let showVideoData;

    props.type === "video" ? showVideoData = true : showVideoData = false;
  
    const handleToggleChange = (event) => {
        console.log(event)
      history.replace(`/pricing/${event}`);
    }
  
    showVideoData ? pricingData = videoPricingData : pricingData = photoPricingData;

    const pricingTableHTML = pricingData.map(item => {
        let pricingHTML;
        if(item.salePrice === ""){
            pricingHTML = (
                <>
                    <span className="ml-1" style={{textDecoration:"none", fontWeight:"lighter", fontSize:"115%"}}>{item.price}</span>
                </>
            )
        } else {
            pricingHTML = (
                <>
                    <span style={{textDecoration:"line-through", fontWeight:"lighter", fontSize:"105%"}}>{item.price}</span>
                    <span className="ml-1" style={{textDecoration:"none", fontWeight:"lighter", fontSize:"115%"}}>{item.salePrice}</span>
                </>
            )
        }

        return(
            <Col key={item.title} className="mt-4" style={{minWidth:"18em"}}>
                <h4 className="h4 mb-2 font500">{item.title}</h4>
                <h6 className="pb-2" style={{top:"5px", borderBottom: "1px solid lightgray"}}>
                    {pricingHTML}
                </h6>
                <ul className="text-left pt-2" style={{listStyleType: "none", fontSize:"115%"}}>
                    {item.detailItems.map((detail, count) => {

                        return(
                            <li key={count} className="m-3">{detail}</li>
                        );
                    })}
                </ul>
            </Col>
    )});

    // const faqTableHTML = faqData.map((item, count) => {
    //     return(
    //         <div key={count} >
    //             <p  className="h5" style={{fontSize:"130%"}}>{item.question}</p>
    //             <p className="pb-4" style={{fontSize:"110%"}} >{item.answer}</p>
    //         </div>
    //     )
    // })

    return (
        <>
            <div className="section profile-content">
            <Container
                style={{
                    transform: "translate(0,-8em)",
                }}>
                <PageTitle title="Pricing" />

                    <div className="text-center font500">
                            <PhotoVideoToggle
                                onChange={handleToggleChange}
                                showVideoData={showVideoData}
                            ></PhotoVideoToggle>
                        <Row>
                        {pricingTableHTML}
                        </Row>

                    </div>
                    <BookNowButton addNote={true}></BookNowButton>

                    <div className="mt-4 pt-3" >
                        <Row>
                            <Col className="font120">
                                <h4 className="h4 mb-4 font500">What to Expect When You Book</h4>
                                <div className="font500 ml-1 mb-4">After submitting an inquiry on the <a href="/contact" className="dark-blue">book now page</a>, you can expect the following:</div>
                                <ul className="font500 no-bullet">
                                    <li className="mb-3"><FcFeedback className="mr-3 mb-1 big-icon"></FcFeedback>We’ll send you an email to you confirming all the information in your inquiry.</li>
                                    <li className="mb-3"><FcCollaboration className="mr-3 mb-1 big-icon"></FcCollaboration>We’ll ask some follow-up questions about the session you requested and work out any details for your session.</li>
                                    <li className="mb-3"><FcDiploma2 className="mr-3 mb-1 big-icon"></FcDiploma2>We’ll send over a contract so you can verify all the details of your session and sign.</li>
                                    <li className="mb-3"><FcPhone className="mr-3 mb-1 big-icon"></FcPhone>We’ll set up a time to call you about a week before the session. We like to get in touch with our clients to understand what their expectations are and to get to know them a little bit better before the shoot.</li>
                                    <li className="mb-3"><FcCompactCamera className="mr-3 mb-1 big-icon"></FcCompactCamera>Meet together on the day of the shoot and capture some amazing moments.</li>

                                </ul>
                            </Col>                            
                        </Row>
                    </div>

                    <div className="mt-4 pt-3" >
                        <Row>
                            <Col className="font120">
                                <h4 className="h4 mb-4 font500">Travel!</h4>
                                <div className="font500 ml-1 mb-4">We love destination weddings and are available for such. Simply include the destination details in your inquiry on the <a href="/contact" className="dark-blue">book now page</a>.</div>

                                <div className="font500 ml-1 mb-2">Clients will cover all additional travel costs if the session location is outside the greater Houston, TX area. Travel costs include the following:</div>
                                <ul className="font500">
                                    <li className="mb-3">Airfare</li>
                                    <li className="mb-3">Lodging</li>
                                    <li className="mb-3">Additional Transport (Uber, taxi,...etc.)</li>
                                </ul>
                                <div className="font500 ml-1 mb-4">All travel costs will be paid by the client with the last payment at the time the images/videos are delivered (see ‘Payment’ below).</div>

                            </Col>                            
                        </Row>
                    </div>

                    <div className="mt-4 pt-3" >
                        <Row>
                            <Col className="font120">
                                <h4 className="h4 mb-4 font500">Payment <small>(how it works)</small></h4>
                                <ol className="font500">
                                    <li className="mb-3">We send over a contract with all of your session information including the price.</li>
                                    <li className="mb-3">After signing the contract, clients pay 50% of the total payment via venmo as a non-refundable deposit to reserve your date.</li>
                                    <li className="mb-3">After the videos/images have been delivered, clients pay the remaining 50% of the total payment via venmo plus any travel costs.</li>
                                </ol>

                            </Col>                            
                        </Row>
                    </div>

                    <BookNowButton></BookNowButton>
                    {/* <div className="mt-5 pt-3" >
                        <h4 className="h4 mb-4">Frequently Asked Questions</h4>
                        <div >
                            {faqTableHTML}
                        </div>
                    </div> */}
                </Container>
            </div>
        </>
        );
}

export default PricingPageContent;