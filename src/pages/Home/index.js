import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import VideoPreview from "../../components/VideoPreview";
import { firebaseService } from "../../core/services";
import "./style.scss";

function Home() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const getVideos = async () => {
    const result = await firebaseService.getVideos();
    setCurrentVideo(result[0]);
    setVideos(result);
  };

  const playHandler = (video) => {
    setCurrentVideo(video);
  };

  const handleOnPlay = (currentPlayer) => {
    console.log(currentPlayer);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      {currentVideo && (
        <div className="current-vid">
          <YoutubeEmbed
            key={currentVideo.id}
            src={currentVideo.url}
            id={currentVideo.vidId}
            onPlay={handleOnPlay}
          />
        </div>
      )}
      <div className="video-list mx-1">
        {videos.map((video, index) => (
          <VideoPreview key={video.id} video={video} onPlay={playHandler}/>
        ))}
      </div>
    </>
  );
}

export default Home;
