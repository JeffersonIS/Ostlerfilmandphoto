import React from "react";
import {Container} from "reactstrap";
import ContactForm from "components/ContactForm.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ContactMethods from "components/ContactMethods.js";
import "components/componentStyle.css";


function ContactPageContent(props){

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
                    <ContactForm/>

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