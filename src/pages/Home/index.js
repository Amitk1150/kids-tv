import React, { useEffect, useRef, useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { db, colNames } from "../../core/firebase/config";
import { collection, query, getDocs } from "firebase/firestore";
import { getYouTubeVidurl, shuffleArray } from "../../core/helpers/utils";

function Home() {
  const playersRef = useRef([]);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const q = query(collection(db, colNames.videos));

    const result = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      result.push(getYouTubeVidurl(data.youtubeId));
    });


    setVideos(shuffleArray(result));
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
