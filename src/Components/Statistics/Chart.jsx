import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from "prop-types";
const Chart = ({ chart }) => {
  console.log(chart);
  const totalMoney = chart;
  const donateMoney = JSON.parse(localStorage.getItem("donation"));
  let remaining = 0;
  let myDonate;
  if (donateMoney) {
    myDonate = donateMoney.length;
    remaining = totalMoney.length - myDonate;
  } else {
    remaining = totalMoney.length;
  }
  //chart
  const data = [
    { name: "Total Donation", value: remaining },
    { name: "Your Donation", value: myDonate },
  ];
  const colors = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="mx-auto lg:w-[500px] h-[500px] py-16">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart className="mx-auto w-full h-full" width="100%" height="100%">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
Chart.propTypes = {
  chart: PropTypes.object,
};
export default Chart;
