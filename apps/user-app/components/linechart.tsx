"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface LineChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Dataset',
        data,
        borderColor: '#6a51a6',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-96">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
