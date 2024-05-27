import React, { useEffect, useRef, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { firebaseService } from '../../core/services';

function Delete() {
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

  const handleDelete = async (e) => {
    const currentId = e.target.id;
    setVideos(videos.filter(x => x.id !== currentId));
    await firebaseService.deleteVideo(currentId);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      {videos.map((video, index) => (
        <div key={video.id} className="card text-center">
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
          <div className="card-footer bg-danger"><button id={video.id} type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button></div>
        </div>
      ))}
    </div>
  );
}

export default Delete;
