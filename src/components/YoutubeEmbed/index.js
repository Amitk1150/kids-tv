import React, { useEffect, useRef, useState } from "react";

const YoutubeEmbed = ({ src, onPlay, id }) => {
  const [player, setPlayer] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const onPlayerReady = (event) => {
      setPlayer(event.target);
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        onPlay(event.target);
      }
    };

    const loadPlayer = () => {
      const playerInstance = new window.YT.Player(containerRef.current, {
        height: "320px",
        width: "350px",
        playerVars: {
          rel: 0,
        },
        videoId: src.split("/").pop(),
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(playerInstance);
    };

    if (window.YT && window.YT.Player) {
      loadPlayer();
    } else {
      window.onYouTubeIframeAPIReady = loadPlayer;
    }
  }, [src, onPlay]);

  return (
    <div className="video-responsive">
      <div ref={containerRef} id={`player-${id}`} className="youtube-player" />
    </div>
  );
};

export default YoutubeEmbed;
