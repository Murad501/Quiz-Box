import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="flex justify-center items-center h-screen">
        <LineChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <Tooltip/>
        </LineChart>
    </div>
  );
};
export default Statistics;
