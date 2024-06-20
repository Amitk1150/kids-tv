import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

const YoutubeEmbed = ({ src, onPlay, id, type }) => {
  const [player, setPlayer] = useState(null);
  const containerRef = useRef(null);

  const getDimension = (vidType) => {
    if (vidType === "shorts") {
      return {
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight - 64}px`
      }
    } else {
      return {
        width: `${window.innerWidth - 6}px`,
        height: "320px"
      }
    }
  }

  const hideMoreShortsPopup = () => {
    const playerIframe = containerRef.current.querySelector('iframe');
    if (playerIframe) {
      const doc = playerIframe.contentDocument || playerIframe.contentWindow.document;
      const styles = document.createElement('style');
      styles.innerHTML = `
      .ytp-shorts-mode .ytp-pause-overlay-container {
          display: none !important;
        }
      `;
      doc.head.appendChild(styles);
    }
  };

  useEffect(() => {
    const onPlayerReady = (event) => {
      setPlayer(event.target);
      hideMoreShortsPopup();
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        onPlay(event.target);
      } else if (event.data === window.YT.PlayerState.ENDED && type === "shorts") {
        event.target.playVideo(); // Replay the video when it ends
      }
      hideMoreShortsPopup();
    };

    const loadPlayer = () => {
      const dim = getDimension(type);
      const playerInstance = new window.YT.Player(containerRef.current, {
        height: dim.height,
        width: dim.width,
        playerVars: {
          rel: 0,
          fs: 0,
          autoplay: 1
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
