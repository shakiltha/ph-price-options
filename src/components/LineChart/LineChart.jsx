import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentsMarksData = [
    { name: "Alice", math_mark: 85, physics_mark: 78, chemistry_mark: 90 },
    { name: "Bob", math_mark: 70, physics_mark: 72, chemistry_mark: 85 },
    { name: "Charlie", math_mark: 92, physics_mark: 85, chemistry_mark: 88 },
    { name: "David", math_mark: 78, physics_mark: 68, chemistry_mark: 75 },
    { name: "Emma", math_mark: 88, physics_mark: 90, chemistry_mark: 92 },
    { name: "Frank", math_mark: 65, physics_mark: 60, chemistry_mark: 70 },
    { name: "Grace", math_mark: 80, physics_mark: 75, chemistry_mark: 82 },
    { name: "Henry", math_mark: 75, physics_mark: 82, chemistry_mark: 78 },
    { name: "Ivy", math_mark: 95, physics_mark: 88, chemistry_mark: 94 },
    { name: "Jack", math_mark: 82, physics_mark: 76, chemistry_mark: 85 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentsMarksData}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Line dataKey="math_mark" stroke="red" />
        <Line dataKey={"physics_mark"} stroke="yellow" />
      </LChart>
    </div>
  );
};

export default LineChart;
