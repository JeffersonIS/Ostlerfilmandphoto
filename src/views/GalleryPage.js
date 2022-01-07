/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import GalleryPageContent from "components/GalleryPageContent.js";

function GalleryPage() {

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
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Portraits_Family/TheOstlers/IMG_8662_VZhCIaiFRXP.jpg?updatedAt=1641590082668"/>
      <GalleryPageContent/>
    </div>
  );
}

export default GalleryPage;
