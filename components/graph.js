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
  const dataL = props.data.filter((dataset) => dataset.user === "Linus");
  const dataC = props.data.filter((dataset) => dataset.user === "Calle");
  return (
    <LineChart width={1000} height={500} margin={5} data={dataL}>
      <CartesianGrid strokeDasharray="3 4" />
      <XAxis dataKey="date" />
      <YAxis dataKey="cumulative" />
      <Tooltip />
      <Legend />
      <Line
        data={dataL}
        type="monotone"
        dataKey="cumulative"
        stroke="#E9967A"
        activeDot={{ r: 10 }}
        connectNulls
      />
      <Line
        data={dataC}
        type="monotone"
        dataKey="cumulative"
        stroke="#8FBC8F"
        activeDot={{ r: 10 }}
        connectNulls
      />
    </LineChart>
  );
};
export default Graph;
