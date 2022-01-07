import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import AboutPageContent from "components/AboutPageContent.js";


function AboutPage() {

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
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Wedding/Shumway/IMG_8023_l0pTznAvLc8o.jpg?updatedAt=1641597903225"/>
      <AboutPageContent />
    </div>
  );
}

export default AboutPage;