export let defaultDataset = [
  {
    InjectionSpeed: 0.3,
    FillTime: 3.65,
    InjectionPressure: 875,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 0.6,
    FillTime: 1.81,
    InjectionPressure: 1015,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 0.9,
    FillTime: 0.95,
    InjectionPressure: 1365,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 1.2,
    FillTime: 0.72,
    InjectionPressure: 1514,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 1.5,
    FillTime: 0.58,
    InjectionPressure: 1685,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 1.8,
    FillTime: 0.45,
    InjectionPressure: 1758,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 2.1,
    FillTime: 0.3,
    InjectionPressure: 1824,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 2.4,
    FillTime: 0.25,
    InjectionPressure: 1875,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 2.7,
    FillTime: 0.22,
    InjectionPressure: 1908,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
  {
    InjectionSpeed: 3,
    FillTime: 0.21,
    InjectionPressure: 1925,
    PlasticPressure: 0,
    ShearRate: 0,
    Viscosity: 0,
    percentageVariation: 0,
  },
];

export let defaultChartdata = {
  labels: [1, 2, 3, 4],
  datasets: [
    {
      label: "Viscosity",
      data: [0, 0, 0, 0, 0],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

export const chartOptions = {
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

export let dataRow = {
  InjectionSpeed: 0,
  FillTime: 0,
  InjectionPressure: 0,
  PlasticPressure: 0,
  ShearRate: 0,
  Viscosity: 0,
  percentageVariation: 0,
};
