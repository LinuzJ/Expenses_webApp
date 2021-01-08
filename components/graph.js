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
    <LineChart width={1000} height={500} margin={5}>
      <CartesianGrid strokeDasharray="3 4" />
      <XAxis dataKey="Time" />
      <YAxis dataKey={props.leader} />
      <Tooltip />
      <Legend />
      <Line
        data={dataCalle}
        type="monotone"
        dataKey="Calle"
        stroke="#E9967A"
        activeDot={{ r: 10 }}
      />
      <Line
        data={dataLinus}
        type="monotone"
        dataKey="Linus"
        stroke="#8FBC8F"
        activeDot={{ r: 10 }}
      />
    </LineChart>
  );
};
export default Graph;
