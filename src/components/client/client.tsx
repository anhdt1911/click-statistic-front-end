import React from "react";
import io from "socket.io-client";
import "./Button.css";
const socket = io("https://click-statistic-server.herokuapp.com/");

const Client: React.FC = () => {
  let greenClickTimes = 0;
  let orangeClickTimes = 0;
  const onClick = (color: string) => {
    if (color === "Green") {
      const greenClicked = {
        colour: "Green",
        times: ++greenClickTimes,
      };
      socket.emit("clicked", greenClicked);
    } else {
      const orangeClick = {
        colour: "Orange",
        times: ++orangeClickTimes,
      };
      socket.emit("clicked", orangeClick);
    }
  };
  return (
    <div>
      <button className="green" onClick={() => onClick("Green")}>
        Green
      </button>
      <button className="orange" onClick={() => onClick("Orange")}>
        Orange
      </button>
    </div>
  );
};

export default Client;
