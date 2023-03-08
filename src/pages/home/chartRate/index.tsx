import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
  },
};

const labels = [
  "6 月",
  "7 月",
  "8 月",
  "9 月",
  "10 月",
  "11 月",
  "12 月",
  "1 月",
  "2 月",
  "3 月",
  "4 月",
  "5 月",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels
        .map(() => Math.floor(Math.random() * 71) + 30)
        .sort()
        .reverse(),
      fill: false,
      borderColor: "#FFCC21",
      tension: 0.1,
    },
    {
      label: "Dataset 2",
      data: labels
        .map(() => Math.floor(Math.random() * 71) + 30)
        .sort()
        .reverse(),
      fill: false,
      borderColor: "#8FE9D0",
      tension: 0.1,
    },
  ],
};

export default function ChartRate() {
  return (
    <div className="h-[312px]">
      <Line className="bg-[#2E2E2E]" options={options} data={data} />
    </div>
  );
}
