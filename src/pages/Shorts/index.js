import React from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import "./style.scss";

function Shorts () {
    const handleOnPlay = (currentPlayer) => {
        console.log(currentPlayer);
      };
    return (
        <div className="short-container">
            <YoutubeEmbed
            key="IeYe7HElE8g"
            src={`https://www.youtube.com/embed/IeYe7HElE8g`}
            id="IeYe7HElE8g"
            onPlay={handleOnPlay}
            type="shorts"
          />
        </div>
    );
}
export default Shorts;