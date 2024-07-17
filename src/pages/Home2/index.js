import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import VideoPreview from "../../components/VideoPreview";
import { firebaseService } from "../../core/services";
import "./style.scss";

function Home2() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const getVideos = async () => {
    const result = await firebaseService.getVideos();
    setCurrentVideo(result[0]);
    setVideos(result);
  };

  const playHandler = (video) => {
    console.log("video", video);
    setCurrentVideo(video);
  };

  const handleOnPlay = (currentPlayer) => {
    console.log(currentPlayer);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container p-0">
      <div className="videos-area d-flex flex-md-row flex-column">
        <div className="playing">
          {currentVideo && <YoutubeEmbed
            key={currentVideo.id}
            {...currentVideo}
            onPlay={handleOnPlay}
          />}
        </div>
        <div className="related-items px-md-2 px-0">
        {videos.map((video, index) => (
          <VideoPreview key={video.id} video={video} onPlay={playHandler}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Home2;
