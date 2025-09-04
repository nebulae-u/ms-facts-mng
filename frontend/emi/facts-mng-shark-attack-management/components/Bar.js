import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({ dataSet, title }) {
  // 👉 Extraer labels y valores del array
  const labels = dataSet.map((item) => item.country);
  const values = dataSet.map((item) => item.total);

  // 👉 Definir datos para el gráfico
  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        backgroundColor: "rgba(74, 119, 202,0.5)",
        borderColor: "rgba(74, 119, 202,1)",
        data: values,
      },
    ],
  };

  // 👉 Función auxiliar para cortar textos largos en el eje X
  const wrapLabel = (value, limit = 15) => {
    if (!value) return "";
    if (value.length > limit) {
      return value.substring(0, limit) + "...";
    }
    return value;
  };

  // 👉 Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: title,
      fontSize: 18,
      fontColor: "#4a77ca",
      padding: 10,
    },
    tooltips: {
      mode: "index",
      intersect: true,
      callbacks: {
        title: (tooltipItem, data) => data.labels[tooltipItem[0].index] || "",
      },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            offsetGridLines: true,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            fontSize: 10,
            callback: (value) => wrapLabel(value),
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
}
