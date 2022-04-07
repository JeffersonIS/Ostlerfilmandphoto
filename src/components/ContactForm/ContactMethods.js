import React from "react";
import { Row, Col} from "reactstrap";
import "components/componentStyle.css";
import { FaInstagram, FaFacebookMessenger, FaEnvelope  } from "react-icons/fa";


function ContactMethods(props){

    return (
        <>
            <h4 className="h4 mb-1 pt-5 font500">Have Questions?</h4>
            <p  className='font120 font500 mb-2'>
                Message us directly and follow us on social media or send us an email.
            </p>
            <div className="mb-3">
                <p className="font500">@ostlerfilmandphoto</p>
                <p className="font500">ostlerfilmandphoto@gmail.com</p>
            </div>

            <Row className="text-center pt-4">
                <Col className="insta-link">
                    <a href="https://www.instagram.com/ostlerfilmandphoto"
                            title="Follow us on Instagram"
                            target="_blank">
                        <FaInstagram className="font600" ></FaInstagram>
                    </a>

                    {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <i class="fa fa-instagram" id="insta" aria-hidden="true"></i> */}

                </Col>
                <Col>
                    <a href="https://www.facebook.com/Ostler-Film-and-Photo-104315925157843"
                        title="Follow us on Facebook"
                        target="_blank">
                    <FaFacebookMessenger className="font600"></FaFacebookMessenger>
                        </a>
                </Col>
                <Col>
                    <FaEnvelope className="font600"></FaEnvelope><br></br>
                    <small className="font120"></small>
                </Col>
            </Row>
        </>

        );
}

export default ContactMethods;