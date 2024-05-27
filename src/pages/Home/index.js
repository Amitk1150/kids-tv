import React, { useEffect, useRef, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { firebaseService } from '../../core/services';

function Home() {
  const playersRef = useRef([]);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const result = await firebaseService.getVideos();
    setVideos(result);
  };

  const handlePlay = (currentPlayer) => {
    playersRef.current.forEach((player) => {
      if (player && player !== currentPlayer) {
        player.pauseVideo();
      }
    });
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      {videos.map((video, index) => (
        <div key={index} className="card text-center">
          <div className="card-body p-0">
            <div className="card-text">
              <YoutubeEmbed
                src={video.url}
                id={index}
                onPlay={(player) => {
                  playersRef.current[index] = player;
                  handlePlay(player);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
