import React from "react";
import { videoGalleryData } from "data/videoGalleryData.js";
import VideoCard from "components/VideoCard";

function GalleryVideoGrid() {
  const [showAllVideos, setShowAllVideos] = React.useState(true);
  const [currentVideoId, setCurrentVideoId] = React.useState(null);

  const handleSelectSession = (id) => {
    setCurrentVideoId(id);
    setShowAllVideos(false);
  };

  return (
      <div>
        <h3 className="mb-2">Previous Work</h3>
        {showAllVideos ?
          <div className="text-center mb-4">
            {videoGalleryData?.map((item, count) => {
              return(<VideoCard item={item} onClick={handleSelectSession} id={count} key={count} />)
            })}
          </div>
        :
        <div className="video-grid-container text-center mb-4">
            <div>
                <span className="hover" onClick={() => {setShowAllVideos(true)}}>Back to videos</span>
                <div className="mt-2">
                    <iframe className="video-iframe" src={videoGalleryData[currentVideoId].src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
                </div>
            </div>
        </div>
        }
      </div>
  );
}

export default GalleryVideoGrid;