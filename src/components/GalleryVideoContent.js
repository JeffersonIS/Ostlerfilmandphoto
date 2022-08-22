import React from "react";
import { videoGalleryData } from "data/videoGalleryData.js";
import VideoCard from "components/VideoCard";

function GalleryVideoContent(props) {
  const [showAllVideos, setShowAllVideos] = React.useState(true);
  const [currentVideoId, setCurrentVideoId] = React.useState(null);

  const handleSelectSession = (id) => {
    console.log(id)
    setCurrentVideoId(id);
    setShowAllVideos(false);
  };

  React.useEffect(() => {
    props.params.id ? setShowAllVideos(false) : console.log('muahah');
  }, [])

  console.log('showall videos', showAllVideos);

  return (
      <div>
        {showAllVideos ?
          <div className="text-center mb-5">
            {videoGalleryData?.map((item, count) => {
              return(<VideoCard item={item} onClick={handleSelectSession} id={count} key={count} />)
            })}
          </div>
        :
        <div className="text-center mb-5">
            <span className="hover" onClick={() => {setShowAllVideos(true)}}>Back to videos</span>
            <div className="h3 pb-3">{videoGalleryData[currentVideoId].name}</div>
          <div>
            <iframe className="video-iframe" src={videoGalleryData[currentVideoId].src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
          </div>
        </div>
        }
      </div>
  );
}

export default GalleryVideoContent;