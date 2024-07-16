import "./style.scss";
const YoutubeEmbed = ({ url, onPlay, id, type, title }) => {
  const modifiedUrl = `${url}?rel=0&modestbranding=1&controls=1&autoplay=1`;
  return (
    <div className="position-relative">
      <div className="ratio ratio-16x9">
        <iframe
          src={modifiedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="brand-overide"></div>
      <div className="related-overide"></div>
    </div>
  );
};

export default YoutubeEmbed;
