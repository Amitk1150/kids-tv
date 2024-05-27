import React, { useEffect, useRef, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { db, colNames } from "../../core/firebase/config";
import { collection, query, doc, getDocs, deleteDoc } from "firebase/firestore";
import { getYouTubeVidurl } from "../../core/helpers/utils";

function Delete() {
  const playersRef = useRef([]);
  const [videos, setVideos] = useState([]);


  const getVideos = async () => {
    const q = query(collection(db, colNames.videos));
    const result = [];     
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      result.push({
        id: doc.id,
        url: getYouTubeVidurl(data.youtubeId)
      });
    });
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
    await deleteDoc(doc(db, colNames.videos, currentId));
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
