import React from "react";
import "./style.scss";

function ShortPreview({ video, onDelete, onPlay }) {
  const clickHandler = () => {
    onPlay(video);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="thumbnail-container">
        <img className="shorts-thumbnail w-100" src={video.thumbnailUrl} alt={video.title} />
        {onPlay && (
          <img
            className="play-button"
            src="../../youtube.png"
            alt="Play"
            onClick={clickHandler}
          />
        )}
      </div>
    </div>
  );
}

export default ShortPreview;
