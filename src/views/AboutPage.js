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
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/tr:w-5466,h-2720,cm-extract,x-0,y-924/Other/Amber___Jefferson-6_1__-5BKehZ9K.jpg"/>
      <AboutPageContent />
    </div>
  );
}

export default AboutPage;