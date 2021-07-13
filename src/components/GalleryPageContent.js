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

// reactstrap components
import { NavItem, NavLink, Nav, Container} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import PhotoCard from "components/PhotoCard.js"
import Photos from "components/Photos.js";

// import data object
import { galleryData, galleryCategories } from "data/galleryData.js";

function GalleryPageContent() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [displayedSession, setDisplayedSession] = React.useState("none");
  let galleryHTML;

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
        <NavLink style ={{cursor: "pointer", fontWeight:"300"}}
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

      let galleryCardsToRender = galleryData[Number(activeTab)];

      galleryHTML = galleryCardsToRender.map((item) => {
          return( <PhotoCard onClick={handleSelectSession} item = {item} key={item.sessionID}/> )
        });
    

  } else { //if a session has been clicked, this determines its HTML
    //get the specific session clicked
    let photos = galleryData[activeTab][displayedSession].photos;
    galleryHTML = <div>
                    <div className="h3 pb-3">{galleryData[activeTab][displayedSession].name}</div>
                    <Photos photos={ photos } />
                  </div>
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

          {/*Sub Nav menu */}
          <div className="nav-tabs-navigation text-center">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                {galleryMenuHTML}
              </Nav>
            </div>
          </div>

          {/* Tab panes */}
          <div className="text-center">
            {galleryHTML}
          </div>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default GalleryPageContent;
