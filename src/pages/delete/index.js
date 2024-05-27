import React, { useEffect, useState } from "react";
import { firebaseService } from "../../core/services";
import VideoPreview from "../../components/VideoPreview";
import "./style.scss";

function Delete() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const result = await firebaseService.getVideos();
    setVideos(result);
  };

  const handleDelete = async (e) => {
    const currentId = e.target.id;
    setVideos(videos.filter((x) => x.id !== currentId));
    await firebaseService.deleteVideo(currentId);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="mx-1">
      {videos.map((video, index) => (
        <VideoPreview key={video.id} video={video} onDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default Delete;
