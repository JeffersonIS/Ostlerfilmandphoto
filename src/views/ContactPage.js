import React from "react";
import {Container} from "reactstrap";
// import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import ContactForm from "components/ContactForm/ContactForm.js";
// import PageTitle from "components/PageTitle";
import ContactMethods from "components/ContactForm/ContactMethods.js";
import SuccessModal from "components/ContactForm/SuccessModal.js";
import ErrorModal from "components/ContactForm/ErrorModal.js";
import DemoFooter from "components/Footers/DemoFooter";
// import IndexNavbar from "components/Navbars/IndexNavbar";
import IndexNavbarNoHeroImg from "components/Navbars/IndexNavbarNoHeroImg.js";
import { useHistory } from "react-router";

function ContactPage() {
  const [successModal, setSuccessModal]= React.useState(false);
  const [errorModal, setErrorModal]= React.useState(false);
  let history = useHistory();

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  function updateUrl(string = ''){
    history.replace(`/contact/${string}`)
  }

  return (
    <div>
      <IndexNavbarNoHeroImg/>
      {/* <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Wedding/Shumway/IMG_8023_l0pTznAvLc8o.jpg?updatedAt=1641597903225"/> */}
      <br></br>
      <br></br>
      <div className="section profile-content mt-5">
          <Container>
            <div className="text-center">
              <h2 className='mb-3'>Book Now</h2>
            </div>

              <ContactForm setSuccessModal={setSuccessModal} setErrorModal={setErrorModal} updateUrl={(e) => updateUrl(e)}/>

              <ContactMethods/>

              <SuccessModal isOpen={successModal} setSuccessModal={setSuccessModal}/>
              
              <ErrorModal isOpen={errorModal} setErrorModal={setErrorModal}/>

          </Container>
      </div>
      <DemoFooter/>
    </div>
  );
}

export default ContactPage;