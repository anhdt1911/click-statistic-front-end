import React from "react";
import io from "socket.io-client";

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
      <button className="bg-green-400 w-4" onClick={() => onClick("Green")}>
        Green
      </button>
      <button className="bg-orange-400" onClick={() => onClick("Orange")}>
        Orange
      </button>
    </div>
  );
};

export default Client;
