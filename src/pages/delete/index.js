import React, { useEffect, useState } from "react";
import { firebaseService } from "../../core/services";
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
        <div key={video.id} className="d-flex flex-column justify-content-center align-items-center my-2">
          <div className="vid-title">{video.title}</div>
          <div>
            <img className="w-100" src={video.thumbnailUrl} alt={video.title} />
          </div>
          <div className="w-100">
            <button
              id={video.id}
              type="button"
              className="btn btn-danger w-100"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Delete;
