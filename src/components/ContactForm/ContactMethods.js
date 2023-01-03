import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import "components/componentStyle.css";
import InfoModal from "../InfoModal";


function ContactMethods(props){
    const [infoModalOpen, setInfoModalOpen] = useState(false);

    return (
        <div className="mt-5 pt-5">
            <InfoModal isOpen={infoModalOpen} setInfoModalOpen={setInfoModalOpen}/>
            <Row className="pt-5">
                <Col>
                    <Button color="info" outline type="button" onClick={() => {setInfoModalOpen(!infoModalOpen)}}>
                        View Booking Details and FAQs
                    </Button>
                </Col>
            </Row>
            <h5 className="h4 mb-1 font500">Have Other Questions?</h5>
            <p  className='font120 font500 mb-2'>
                Message us directly and follow us on social media or send us an email. We'll get back to you quickly.
            </p>
            <div className="mb-3">
                <p className="font500">@jeffersonostlerfilms</p>
                <p className="font500">jeffersonostlerfilms@gmail.com</p>
            </div>

            {/* <Row className="text-center pt-4">
                <Col className="insta-link">
                    <a href="https://www.instagram.com/jeffersonostlerfilms"
                            title="Follow us on Instagram"
                            target="_blank"
                            rel="noreferrer">
                        <FaInstagram className="font600" ></FaInstagram>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.facebook.com/Ostler-Film-and-Photo-104315925157843"
                        title="Follow us on Facebook"
                        target="_blank"
                        rel="noreferrer">
                    <FaFacebookMessenger className="font600"></FaFacebookMessenger>
                        </a>
                </Col>
                <Col>
                    <FaEnvelope className="font600"></FaEnvelope><br></br>
                    <small className="font120"></small>
                </Col>
            </Row> */}
        </div>

        );
}

export default ContactMethods;