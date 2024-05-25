import React, { useRef } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";

function Home() {
  const playersRef = useRef([]);

  const handlePlay = (currentPlayer) => {
    playersRef.current.forEach((player) => {
      if (player && player !== currentPlayer) {
        player.pauseVideo();
      }
    });
  };

  const videos = [
    "https://www.youtube.com/embed/PtqevDJz7W8",
    "https://www.youtube.com/embed/LXb3EKWsInQ",
  ];

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      {videos.map((videoUrl, index) => (
        <div key={index} className="card text-center">
          <div className="card-body p-0">
            <div className="card-text">
              <YoutubeEmbed
                src={videoUrl}
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
