import React from "react";
import DemoFooter from "components/Footers/DemoFooter";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import PricingPageContent from "components/PricingPageContent.js";


function PricingPage() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <div>
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Engagements/TheEvans/IMG_5576_cfBsK4pyT.jpg"/>
      <PricingPageContent />
      <DemoFooter/>
    </div>
  );
}

export default PricingPage;