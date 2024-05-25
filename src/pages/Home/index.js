import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import "./style.scss";

function Home() {
  const videos = [
    "https://www.youtube.com/embed/PtqevDJz7W8",
    "https://www.youtube.com/embed/LXb3EKWsInQ",
    "https://player.vimeo.com/video/943254386",
    "https://www.youtube.com/embed/fN74Ate46Z8",
    "https://www.youtube.com/embed/kyRclsioJBQ",
    "https://www.youtube.com/embed/C_yFoy7lf7s",
    "https://www.youtube.com/embed/gSapVFecQ4M",
    "https://www.youtube.com/embed/MypR1Ex1mNc"
  ];

  const onStartHandler = (d) => {
    console.log(d);
  }

  return (
    <div className="d-flex justify-content-center flex-column align-items-center ms-sm-2">
      {videos.map((x, index) => (
        <div key={index} className="card text-center">
          <div className="card-body p-0">
            <div className="card-text">
              <YoutubeEmbed src={x}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
