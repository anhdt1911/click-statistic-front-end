import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import CSS from "csstype";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
ChartJS.register(ArcElement, Tooltip, Legend);

import { Pie } from "react-chartjs-2";

const socket = io("https://click-statistic-server.herokuapp.com/");
const doughnutStyle: CSS.Properties = {
  height: "10vh",
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart Game",
    },
  },
};

const Dashboard: React.FC = () => {
  const [greenClickTimes, setGreenClickTimes] = useState<number>(0);
  const [orangeClickTimes, setOrangeClickTimes] = useState<number>(0);
  useEffect(() => {
    socket.on("update", (data: { colour: string; times: number }) => {
      if (data.colour === "Green") {
        setGreenClickTimes(data.times);
      } else {
        setOrangeClickTimes(data.times);
      }
    });
  });
  const pieData = {
    labels: ["Green", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [greenClickTimes, orangeClickTimes],
        backgroundColor: ["rgba(0, 255, 0, 1)", "rgba(255, 165, 0, 1)"],
        borderColor: ["rgba(0, 255, 0, 1)", "rgba(255, 165, 0, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie style={doughnutStyle} options={options} data={pieData} />;
};

export default Dashboard;
