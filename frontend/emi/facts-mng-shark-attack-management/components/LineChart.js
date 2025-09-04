import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ dataSet, title }) {
  // 👉 Extraer labels y valores del array
  const labels = dataSet.map((item) => item.year);
  const values = dataSet.map((item) => item.total);

  // 👉 Definir datos para el gráfico
  const data = {
    labels,
    datasets: [
      {
        label: "Total",
        data: values,
        fill: false,
        borderColor: "rgba(74, 119, 202, 1)", // línea azul
        backgroundColor: "rgba(74, 119, 202, 0.5)", // puntos azules
        pointBorderColor: "#4a77ca",
        pointBackgroundColor: "#4a77ca",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4a77ca",
        tension: 0.3, // suaviza la curva de la línea
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
      intersect: false,
      callbacks: {
        title: (tooltipItem, data) => data.labels[tooltipItem[0].index] || "",
      },
    },
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: false,
            maxRotation: 90,
            minRotation: 45,
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

  return <Line data={data} options={options} />;
}
