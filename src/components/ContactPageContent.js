import React from "react";
import {Container} from "reactstrap";
import ContactForm from "components/ContactForm.js";
import DemoFooter from "components/Footers/DemoFooter.js";


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
                    <ContactForm/>
                </Container>
            </div>
            <DemoFooter />
        </>
        );
}

export default ContactPageContent;