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
import classNames from "classnames";
import React, { useEffect, useState } from "react";
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

function getData() {
  return {
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
}

const listFilter = [
  {
    id: "filter-1",
    text: "日",
    value: 1,
  },
  {
    id: "filter-2",
    text: "週",
    value: 2,
  },
  {
    id: "filter-3",
    text: "月",
    value: 3,
  },
  {
    id: "filter-4",
    text: "年",
    value: 4,
  },
];

export default function Graph() {
  const [selectedFilter, setSelectedFilter] = useState(1);

  const [data, setData] = useState(getData());

  useEffect(() => {
    setData(getData());
  }, [selectedFilter]);

  return (
    <div className="bg-[#2E2E2E] p-6  my-12">
      <div className="flex gap-6 items-center text-white mb-4">
        <h4 className="text-sm">
          BODY <br /> RECORD
        </h4>
        <time className="text-lg">2021.05.21</time>
      </div>
      <div className="h-[250px]">
        <Line options={options} data={data} />
      </div>
      <div className="flex items-center mt-6 gap-4 ">
        {listFilter.map((filter) => (
          <div key={filter.id}>
            <input
              id={filter.id}
              type="radio"
              value={filter.value}
              name="filter-graph"
              hidden
              onClick={() => {
                setSelectedFilter(filter.value);
              }}
            />
            <label
              htmlFor={filter.id}
              className={classNames(
                "block  py-1 px-6 rounded-full text-sm cursor-pointer",
                filter.value === selectedFilter
                  ? "bg-yellow text-white"
                  : "bg-white text-yellow",
              )}
            >
              {filter.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
