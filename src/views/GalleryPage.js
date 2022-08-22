
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ShortPageHeader from "components/Headers/ShortPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter";
import PageTitle from "components/PageTitle";
import { Container } from "reactstrap"
import PhotoVideoToggle from "components/PhotoVideoToggle";
import GalleryVideoPage from "../components/GalleryVideoPage";
import GalleryPhotoPage from "../components/GalleryPhotoPage";
import { useHistory } from "react-router";


function GalleryPage(props) {
  let history = useHistory();  
  let showVideoGallery;
  props.match.params.type === "video" ? showVideoGallery = true : showVideoGallery = false;

  const handleToggleChange = (event) => {
    history.replace(`/gallery/${event}`);
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
      <div className="section profile-content">
            <Container
                style={{
                    transform: "translate(0,-8em)",
                }}>
                <PageTitle title="Gallery" />
                <div className="text-center mb-4 font500">
                  <PhotoVideoToggle
                      onChange={handleToggleChange}
                      showVideoData={showVideoGallery}
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
