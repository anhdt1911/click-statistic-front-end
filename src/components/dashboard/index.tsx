import React, { useEffect, useState } from "react";
import { usePongSubscription } from "../../gql/graphql";
import { Table } from "antd";
import Chart from "./Chart";

interface IProps {}

const columns = [
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Click",
    dataIndex: "click",
    key: "click",
  },
];

const Dashboard: React.FC<IProps> = ({}: IProps) => {
  const { data } = usePongSubscription();
  const [render, setRender] = useState(0);
  const [tableData, setTableData] = useState([
    { color: "Green", click: 0 },
    { color: "Orange", click: 0 },
  ]);
  useEffect(() => {
    let interval = setInterval(() => {
      setRender((preRender) => preRender + 5);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (data) {
      const pong = data.pong || {};
      setTableData([
        ...tableData.map((rowData) =>
          rowData.color === pong.color
            ? { color: pong.color || "", click: pong.click || 0 }
            : rowData
        ),
      ]);
    }
  }, [data]);

  return (
    <div>
      <Table
        rowKey={(obj) => obj.color}
        dataSource={tableData}
        columns={columns}
      />
      <Chart tableData={tableData} render={render} />
    </div>
  );
};

export default Dashboard;
