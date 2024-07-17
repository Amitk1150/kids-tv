import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import ShortPreview from "../../components/ShortPreview";
import { firebaseService } from "../../core/services";
import "./style.scss";

function Shorts() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const getVideos = async () => {
    const result = await firebaseService.getShorts();
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
      <div className="shorts-area d-flex flex-column h-100">
        {videos.map((video, index) => (
          <ShortPreview key={video.id} video={video} onPlay={playHandler} />
        ))}
      </div>
    </div>
  );
}
export default Shorts;
