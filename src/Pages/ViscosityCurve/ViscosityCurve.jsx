import "./ViscosityCurve.scss";
import "handsontable/dist/handsontable.min.css";
import { useState } from "react";
import { HotTable, HotColumn } from "@handsontable/react";
import { Line } from "react-chartjs-2";

var dataset = [
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

let chartData = {
  labels: ["Viscosity"],
  datasets: [
    {
      label: "0",
      data: [0, 0, 0, 0, 0],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

let viscosityData = [0];
// var injectionSpeedData = [0];

function ViscosityCurve() {
  const [intensificationRatio, setIntensificationRatio] = useState(11.45);

  const updateChart = () => {
    viscosityData = dataset.map((element) => element["Viscosity"]);
    // injectionSpeedData = dataset.map((element) => element["InjectionSpeed"]);
    chartData = {
      // labels: ["Viscosity"],
      datasets: [
        {
          label: "Viscosity",
          data: viscosityData,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
  };

  const addRow = () => {
    dataset.push({
      InjectionSpeed: 0,
      FillTime: 0,
      InjectionPressure: 0,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    });
  };

  const addRows = (numberOfRows) => {
    for (let index = 0; index < numberOfRows; index++) {
      dataset.push({
        InjectionSpeed: 0,
        FillTime: 0,
        InjectionPressure: 0,
        PlasticPressure: 0,
        ShearRate: 0,
        Viscosity: 0,
        percentageVariation: 0,
      });
    }
  };

  const deletLastRow = () => {
    dataset.splice(-1, 1);
  };

  const deleteAlRows = () => {
    dataset = [
      {
        InjectionSpeed: 0,
        FillTime: 0,
        InjectionPressure: 0,
        PlasticPressure: 0,
        ShearRate: 0,
        Viscosity: 0,
        percentageVariation: 0,
      },
    ];
  };
  const handleIntensificationRatioChange = (event) => {
    setIntensificationRatio(event.target.value);
  };
  const calculate = (e) => {
    let previousViscosity = 0;
    dataset.forEach((element) => {
      element["PlasticPressure"] =
        element["InjectionPressure"] * intensificationRatio;
      element["ShearRate"] = 1 / element["FillTime"];
      element["Viscosity"] = element["FillTime"] * element["PlasticPressure"];
      element["percentageVariation"] =
        (element["Viscosity"] - previousViscosity) / previousViscosity;
      previousViscosity = element["Viscosity"];
    });
    updateChart();
    e.preventDefault();
    setIntensificationRatio(0);
  };

  return (
    <div className="viscositycurve">
      <h2 className="study-title">Viscosity Curve</h2>
      <div>
        <form className="viscositycurve__form">
          <div className="viscositycurve__form--intensificationratio">
            <label className="viscositycurve__form--intensificationratio-label">
              Intensification Ratio
            </label>
            <input
              className="viscositycurve__form--intensificationratio-input"
              type="number"
              value={intensificationRatio}
              onChange={handleIntensificationRatioChange}
            />
          </div>
          <div className="viscositycurve__form--inputdata">
            <h3 className="viscositycurve__form--h3">Input Data</h3>
            <div className="viscositycurve__form--inputgroup">
              <span>No. Rows</span>
              <input type="number" placeholder="10" />
              <button className="btn btn-blue" type="button">
                Add Rows
              </button>
              <button className="btn btn-red" type="button">
                Delete All Rows
              </button>
            </div>
            <div className="viscositycurve__form--inputgroup">
              <button className="btn btn-blue" type="button">
                Add Row
              </button>
              <button className="btn btn-red" type="button">
                Delete Last Row
              </button>
            </div>

            <button
              className="btn btn-calculate"
              onClick={(e) => {
                calculate(e);
              }}
              type="button"
            >
              Calculate
            </button>
            <div className="viscositycurve__table">
              <HotTable
                licenseKey="non-commercial-and-evaluation"
                colHeaders={true}
                rowHeaders={true}
                contextMenu={true}
                data={dataset}
              >
                <HotColumn data="InjectionSpeed" title="Injection Speed" />
                <HotColumn data="FillTime" title="Fill Time" />
                <HotColumn
                  data="InjectionPressure"
                  title="Injection Pressure"
                />
                <HotColumn
                  data="PlasticPressure"
                  title="Plastic Pressure"
                  readOnly={true}
                />
                <HotColumn
                  data="ShearRate"
                  title="Shear Rate"
                  readOnly={true}
                />
                <HotColumn data="Viscosity" title="Viscosity" readOnly={true} />
                <HotColumn
                  data="percentageVariation"
                  title="% Variation"
                  readOnly={true}
                />
              </HotTable>
            </div>
          </div>
        </form>
        <div className="viscositycurve__chart">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default ViscosityCurve;
