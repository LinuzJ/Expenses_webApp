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
  return (
    <LineChart width={1000} height={500} margin={5} data={props.data}>
      <CartesianGrid strokeDasharray="3 4" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="cumulativeLinus"
        stroke="#E9967A"
        activeDot={{ r: 10 }}
        connectNulls
      />
      <Line
        type="monotone"
        dataKey="cumulativeCalle"
        stroke="#8FBC8F"
        activeDot={{ r: 10 }}
        connectNulls
      />
    </LineChart>
  );
};
export default Graph;
