import React from "react";
import "./style.scss";

const YoutubeEmbed = ({ src }) => (
  <div className="video-responsive">
    <iframe
      height="auto"
      width="350px"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
