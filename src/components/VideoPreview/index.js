import React from "react";
import "./style.scss";

function VideoPreview({ video, onDelete, onPlay }) {
  const clickHandler = () => {
    onPlay(video);
  }
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center my-2"
    >
      <div className="vid-title">{video.title}</div>
      <div className="vid-thumbnail">
        <img className="w-100" src={video.thumbnailUrl} alt={video.title} />
        {onPlay && <img className="play-button" src="../../youtube.png" alt="Play" onClick={clickHandler} /> }
      </div>
      {onDelete && (
        <div className="w-100">
          <button
            id={video.id}
            type="button"
            className="btn btn-danger w-100"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPreview;
