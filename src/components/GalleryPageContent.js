import React from "react";
import { NavItem, NavLink, Nav, Container, Row, Col} from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";
import PhotoCard from "components/PhotoCard.js"
import Photos from "components/Photos.js";
import PhotoVideoToggle from "./PhotoVideoToggle";
import { photoGalleryData, photoGalleryCategories } from "data/photoGalleryData.js";
import { videoGalleryData, videoGalleryCategories } from "data/videoGalleryData.js";

import BookNowButton from "./BookNowButton";
import VideoCard from "./VideoCard";

function GalleryPageContent() {
  const [showPhotoGallery, setShowPhotoGallery] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const [displayedSession, setDisplayedSession] = React.useState("none");
  let galleryHTML, galleryData, galleryCategories;

  showPhotoGallery ? galleryData = photoGalleryData : galleryData = videoGalleryData;

  if(showPhotoGallery){
    galleryData = photoGalleryData;
    galleryCategories = photoGalleryCategories;
  } else {
    galleryData = videoGalleryData;
    galleryCategories = videoGalleryCategories;
  }

  const handleToggleChange = (event) => {
    setDisplayedSession("none");
    setActiveTab(0);
    setShowPhotoGallery(event);
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
        }}><span className="gallery-nav-link">{item}</span>
        </NavLink>
      </NavItem>
    )
  });

  if(showPhotoGallery){
    if(displayedSession === "none"){
      //display all photo sessions for the specified tab
        galleryHTML = galleryData[Number(activeTab)]?.map((item) => {
            return( <PhotoCard onClick={handleSelectSession} item = {item} key={item.sessionID}/> )
          });
    } else { 
      //if a session has been clicked, this determines its HTML
      //get the specific session clicked
        let photos = galleryData[activeTab][displayedSession].photos;
        galleryHTML = <div>
                        <div className="h3 pb-3">{galleryData[activeTab][displayedSession].name}</div>
                          <Photos photos={ photos } />
                        </div>  
    }
  }

  if(!showPhotoGallery){
    if(displayedSession === "none"){
      //display all video sessions for the specified tab
        galleryHTML = galleryData?.map((item) => {
            return(<VideoCard item={item} onClick={handleSelectSession} key={item.sessionID} />)
          });
    } else { 
      //if a session has been clicked, this determines its HTML
      //get the specific session clicked
        galleryHTML = <div>
                        <div className="h3 pb-3">{galleryData[displayedSession].name}</div>
                          <div>
                            <iframe className="video-iframe" src={galleryData[displayedSession].src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
                          </div>
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
          <div className="text-center mb-4 font500">
            <PhotoVideoToggle
                onChange={handleToggleChange}
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

          {/*Gallery Content */}
          <div className="text-center mb-5">
            {galleryHTML}
          </div>

          <BookNowButton></BookNowButton>
        </Container>
      </div>
    </>
  );
}

export default GalleryPageContent;
