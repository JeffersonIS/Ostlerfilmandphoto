import React from "react";
import { photoGalleryData } from "data/photoGalleryData.js";
import PhotoCard from "components/PhotoCard.js"
import Photos from "components/Photos.js";
import GalleryPhotoSubMenu from "./GalleryPhotoSubMenu";

function GalleryPhotoPage() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [currentSession, setCurrentSession] = React.useState(-1);

  const toggle = (tab) => {
      setCurrentSession(-1);
      setActiveTab(tab);
  }
  return (
    <div>
      {currentSession < 0 ? 
      <div>
          <GalleryPhotoSubMenu onClick={toggle} activeTab={activeTab} />
        <div className="text-center mb-5">
          {photoGalleryData[Number(activeTab)]?.map((item, count) => {
              return( <PhotoCard onClick={setCurrentSession} item = {item} key={count} count={count}/> )
            })
          }
        </div>
      </div>
      :
      <div>
        <GalleryPhotoSubMenu onClick={toggle} activeTab={activeTab} />
        <div className="text-center mb-5">
          <div className="h3 pb-3">{photoGalleryData[activeTab][currentSession].name}</div>
          <Photos photos={photoGalleryData[activeTab][currentSession].photos} />
        </div>
      </div>

    }
    </div>
  );
}

export default GalleryPhotoPage;