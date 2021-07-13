import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import ContactPageContent from "components/ContactPageContent.js";


function ContactPage() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div>
      <IndexNavbar />
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Family/TheMcBrides/IMG_6388_48tDvERzU.jpg"/>
      <ContactPageContent />
    </div>
  );
}

export default ContactPage;