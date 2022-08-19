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
import DemoFooter from "components/Footers/DemoFooter";
import PageTitle from "components/PageTitle";
import { Container } from "reactstrap"
import PhotoVideoToggle from "components/PhotoVideoToggle";
import GalleryPhotoPage from "./GalleryPhotoPage";
import GalleryVideoPage from "../components/GalleryVideopage";
import { useHistory } from "react-router";


function GalleryPage(props) {
  let history = useHistory();  
  let showVideoGallery;
  props.match.params.type === "video" ? showVideoGallery = true : showVideoGallery = false;
  console.log(showVideoGallery);
  
  console.log(props.match.params)

  const handleToggleChange = (event) => {
    console.log(history)
    history.replace(`/${event}`);
  }

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
      <ShortPageHeader path="https://ik.imagekit.io/ostlerfilmandphoto/Portraits_Family/TheOstlers/IMG_8662_VZhCIaiFRXP.jpg?updatedAt=1641590082668"/>
      {/* <GalleryPageContent/> */}

      <div className="section profile-content">
            <Container
                style={{
                    transform: "translate(0,-8em)",
                }}>
                <PageTitle title="Gallery" />
                <div className="text-center mb-4 font500">
                  <PhotoVideoToggle
                      onChange={handleToggleChange}
                      showPhotoData={showVideoGallery}
                  ></PhotoVideoToggle>
                </div>
                {/*Video Gallery */}
                {showVideoGallery ? 
                  <div>
                    <GalleryVideoPage params={props.match.params} />
                  </div>
                  : 
                  <div>
                    <GalleryPhotoPage params={props.match.params} />
                  </div>
                }
                
            </Container>
      </div>

      <DemoFooter/>
    </div>
  );
}

export default GalleryPage;
