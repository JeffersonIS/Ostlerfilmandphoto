import React from "react";
import { NavItem, NavLink, Nav, Container, Row, Col} from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";
import PhotoCard from "components/PhotoCard.js"
import Photos from "components/Photos.js";
import PhotoVideoToggle from "./PhotoVideoToggle";
import { photoGalleryData, photoGalleryCategories } from "data/photoGalleryData.js";
import { videoGalleryData, videoGalleryCategories } from "data/videoGalleryData.js";

import BookNowButton from "./BookNowButton";

function GalleryPageContent() {
  const [showPhotoGallery, setShowPhotoGallery] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState(0);
  const [displayedSession, setDisplayedSession] = React.useState("none");
  let galleryHTML, galleryData, galleryCategories, videoMessage;

  showPhotoGallery ? galleryData = photoGalleryData : galleryData = videoGalleryData;

  if(showPhotoGallery){
    galleryData = photoGalleryData;
    galleryCategories = photoGalleryCategories;
  } else {
    galleryData = videoGalleryData;
    galleryCategories = videoGalleryCategories;
    videoMessage = "We are currently building our video portfolio out this year. Ask us about current promotions on videography!"
  }

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
    setDisplayedSession("none");
  };

  const handleSelectSession = (session) => {
    setDisplayedSession(Number(session));
  };

  const galleryMenuHTML = galleryCategories.map((item,count) => {
    return(
        <NavItem key={count + item}>
        <NavLink style ={{cursor: "pointer", fontWeight:"500"}}
            className={Number(activeTab) === Number(count) ? "active" : ""}
            onClick={() => {
            toggle(Number(count));
        }}>{item}
        </NavLink>
      </NavItem>
    )
  });


  if(displayedSession === "none"){
    //display all photo sessions for the specified tab
      galleryHTML = galleryData[Number(activeTab)]?.map((item) => {
          return( <PhotoCard onClick={handleSelectSession} item = {item} key={item.sessionID}/> )
        });
  } else { //if a session has been clicked, this determines its HTML
    //get the specific session clicked
    if(showPhotoGallery){
      let photos = galleryData[activeTab][displayedSession].photos;
      galleryHTML = <div>
                      <div className="h3 pb-3">{galleryData[activeTab][displayedSession].name}</div>
                      <Photos photos={ photos } />
                    </div>  
    }
  }


  return (
    <>
      <div className="section profile-content">
        <Container
            style={{
              transform: "translate(0,-8em)",
           }}>
          <div className="text-center">
            <h1 style={{color:"white", marginBottom:"1.3em"}}>The Gallery</h1>
          </div>

          {/*Toggle */}
          <div className="text-center mb-5 font500">
          <PhotoVideoToggle
              onChange={setShowPhotoGallery}
              showPhotoData={showPhotoGallery}
          ></PhotoVideoToggle>
          </div>

          {/*Sub Nav menu */}
          <div className="nav-tabs-navigation text-center">
            <div className="nav-tabs-wrapper">
              <Row>
                <Col>
                <Nav role="tablist" tabs>
                {galleryMenuHTML}
              </Nav>

                </Col>
              </Row>
            </div>
          </div>

          {/* Gallery Content */}
          <div className="text-center mb-5">
            <span className="font500">{videoMessage}</span>
            {galleryHTML}
          </div>
          <BookNowButton></BookNowButton>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default GalleryPageContent;
