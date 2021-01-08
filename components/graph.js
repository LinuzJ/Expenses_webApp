import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Graph = (props) => {
  const dataLinus = props.dataLinus;
  const dataCalle = props.dataCalle;
  return (
    <LineChart
      width={1000}
      height={500}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 4" />
      <XAxis dataKey="Time" />
      <YAxis dataKey="Linus" />
      <Tooltip />
      <Legend />
      <Line
        data={dataCalle}
        type="monotone"
        dataKey="Calle"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line data={dataLinus} type="monotone" dataKey="Linus" stroke="#82ca9d" />
    </LineChart>
  );
};
export default Graph;
