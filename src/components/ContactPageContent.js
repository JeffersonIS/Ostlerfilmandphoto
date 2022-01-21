import React from "react";
import {Container, Button, FormGroup, Input, Modal} from "reactstrap";
import ContactForm from "components/ContactForm.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ContactMethods from "components/ContactMethods.js";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import "components/componentStyle.css";


function ContactPageContent(props){
    const [successModal, setSuccessModal]= React.useState(false);
    const [errorModal, setErrorModal]= React.useState(false);

    return (
        <>
            <div className="section profile-content">
                <Container
                    style={{
                        transform: "translate(0,-8em)",
                    }}>

                    <div className="text-center">
                    <h1 style={{color:"white", marginBottom:"1.3em"}}>Contact</h1>
                    </div>
                    <h4 className="h4 mb-1 pt-2 font500">Submit an Inquiry </h4>
                    <p  className='font120 font500 mb-4'>
                        We would love to work with you!
                    </p>

                    <ContactForm setSuccessModal={setSuccessModal} setErrorModal={setErrorModal}/>

                    <Modal isOpen={successModal} toggle={() => setSuccessModal(false)}>
                        <div className="modal-header">
                            <h5 className="modal-title font500" id="exampleModalLiveLabel">
                                Message Successfully Sent! 
                                <FcCheckmark className="ml-2 mb-1"></FcCheckmark>
                            </h5>
                        </div>
                        <div className="modal-body">
                            <p className="font500">Thank you for sending us an inquiry! We'll get back to you within 48 hrs.</p>
                        </div>
                        <div className="text-right mb-2 mr-3">
                            <div className="right-side">
                                <Button
                                className="btn-link"
                                color="danger"
                                type="button"
                                onClick={() => setSuccessModal(false)}
                                >
                                Close
                                </Button>
                            </div>
                        </div>
                    </Modal>
                    
                    <Modal isOpen={errorModal} toggle={() => setErrorModal(false)}>
                        <div className="modal-header">
                            <h5 className="modal-title font500" id="exampleModalLiveLabel">
                                Message Failed to Send! 
                                <FcCancel className="ml-2 mb-1"></FcCancel>
                            </h5>
                        </div>
                        <div className="modal-body">
                            <p className="font500">Please check the information you entered and try again. If the problem persists, email us directly or DM us on social media. Sorry for the troubles!</p>
                        </div>
                        <div className="text-right mb-2 mr-3">
                            <div className="right-side">
                                <Button
                                className="btn-link"
                                color="danger"
                                type="button"
                                onClick={() => setErrorModal(false)}
                                >
                                Close
                                </Button>
                            </div>
                        </div>
                    </Modal>

                    <h4 className="h4 mb-1 pt-5 font500">Have Questions?</h4>
                    <p  className='font120 font500 mb-2'>
                        Message us directly and follow us on social media or send us an email.
                    </p>
                    <div className="mb-3">
                        <p className="font500">@ostlerfilmandphoto</p>
                        <p className="font500">ostlerfilmandphoto@gmail.com</p>
                    </div>
                    <ContactMethods></ContactMethods>

                </Container>
            </div>
            <DemoFooter />
        </>
        );
}

export default ContactPageContent;