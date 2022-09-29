import React from "react";
import { Button, Modal, Row, Col } from "reactstrap";
import { FcFeedback, FcCollaboration, FcDiploma2 } from "react-icons/fc";

import 'components/componentStyle.css'

function InfoModal(props) {
    return(
        <Modal isOpen={props.isOpen} toggle={() => props.setInfoModalOpen(false)}>
            <div className="modal-header">
                <h5 className="modal-title font500" id="exampleModalLiveLabel">
                    FAQS
                </h5>
                
            </div>
            
            <div className="pl-3 pr-3">
                    <div>
                        <Row>
                            <Col className="font120">
                            <h5 className="h4 mb-4 font500">What happens after we book?</h5>
                                <ul className="font500 no-bullet">
                                    <li className="mb-3"><FcFeedback className="mr-3 mb-1 big-icon"></FcFeedback>We’ll send you an email to you confirming all the information in your inquiry.</li>
                                    <li className="mb-3"><FcCollaboration className="mr-3 mb-1 big-icon"></FcCollaboration>We’ll ask some follow-up questions and work out any details for your session.</li>
                                    <li className="mb-3"><FcDiploma2 className="mr-3 mb-1 big-icon"></FcDiploma2>We’ll send over a contract so you can verify all the details of your session.</li>
                                    {/* <li className="mb-3"><FcPhone className="mr-3 mb-1 big-icon"></FcPhone>We’ll set up a time to call you about a week before the session. We like to get in touch with our clients to understand what their expectations are and to get to know them a little bit better before the shoot.</li> */}
                                    {/* <li className="mb-3"><FcCompactCamera className="mr-3 mb-1 big-icon"></FcCompactCamera>We'll set up a time to call.</li> */}

                                </ul>
                            </Col>                            
                        </Row>
                    </div>

                    <div className="mt-2" >
                        <Row>
                            <Col className="font120">
                                <h5 className="h4 mb-4 font500">Do you travel?</h5>
                                <div className="font500 ml-1 mb-4">Yes! We love destination weddings and are willing to travel.</div>

                                <div className="font500 ml-1 mb-2">Clients will cover all additional travel costs if the session location is outside the greater Houston, TX area. Travel costs include the following:</div>
                                <ul className="font500">
                                    <li className="mb-3">Airfare</li>
                                    <li className="mb-3">Lodging</li>
                                    <li className="mb-3">Additional Transport (Uber, taxi,...etc.)</li>
                                </ul>
                                {/* <div className="font500 ml-1 mb-4">All travel costs will be paid by the client with the last payment at the time the images/videos are delivered (see ‘Payment’ below).</div> */}

                            </Col>                            
                        </Row>
                    </div>

                    {/* <div className="mt-4 " >
                        <Row>
                            <Col className="font120">
                                <h4 className="h4 mb-4 font500">How Payment Works</h4>
                                <ol className="font500">
                                    <li className="mb-3">We send over a contract with all of your session information including the price.</li>
                                    <li className="mb-3">After signing the contract, clients pay 50% of the total payment via venmo as a non-refundable deposit to reserve your date.</li>
                                    <li className="mb-3">After the videos/images have been delivered, clients pay the remaining 50% of the total payment via venmo plus any travel costs.</li>
                                </ol>

                            </Col>                            
                        </Row>
                    </div> */}


            </div>

            <div className="text-right mb-2 mr-3">
                <div className="right-side">
                    <Button
                    className="btn"
                    color="secondary"
                    type="button"
                    onClick={() => props.setInfoModalOpen(false)}
                    >
                    Close
                    </Button>
                </div>
            </div>
        </Modal>
  );
}

export default InfoModal;
