import React from "react";
import {Container} from "reactstrap";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import ContactForm from "components/ContactForm/ContactForm.js";
import PageTitle from "components/PageTitle";
import ContactMethods from "components/ContactForm/ContactMethods.js";
import SuccessModal from "components/ContactForm/SuccessModal.js";
import ErrorModal from "components/ContactForm/ErrorModal.js";
import DemoFooter from "components/Footers/DemoFooter";
import IndexNavbar from "components/Navbars/IndexNavbar";


function ContactPage() {
  const [successModal, setSuccessModal]= React.useState(false);
  const [errorModal, setErrorModal]= React.useState(false);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div>
      <IndexNavbar/>
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Family/TheMcBrides/IMG_6388_48tDvERzU.jpg"/>
      <div className="section profile-content">
          <Container className="contact-container">

              <PageTitle title="Contact" />

              <ContactForm setSuccessModal={setSuccessModal} setErrorModal={setErrorModal}/>

              <ContactMethods></ContactMethods>

              <SuccessModal isOpen={successModal} setSuccessModal={setSuccessModal}/>
              
              <ErrorModal isOpen={errorModal} setErrorModal={setErrorModal}/>

          </Container>
      </div>
      <DemoFooter/>
    </div>
  );
}

export default ContactPage;