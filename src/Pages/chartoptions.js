const chartOptions = {
  resposive: true,
  scales: {
    xAxes: [{}],
    yAxes: [
      {
        id: "y-axis-0",
        position: "left",
      },
      {
        id: "y-axis-1",
        position: "right",
        gridLines: {
          color: "rgba(255,0,0,0.3)",
        },
        ticks: {
          fontColor: "red",
        },
      },
    ],
  },
};

export default chartOptions;
