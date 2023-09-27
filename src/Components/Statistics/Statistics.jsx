import { useLoaderData } from "react-router-dom";
import Chart from "./Chart";

const Statistics = () => {
  const stats = useLoaderData();
  return (
    <div>
        <Chart chart={stats}></Chart>
    </div>
  );
};

export default Statistics;
