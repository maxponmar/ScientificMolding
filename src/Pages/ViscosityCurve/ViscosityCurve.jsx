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

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
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

var viscosityData = [0];
var injectionSpeedData = [0];

function ViscosityCurve() {
  const [intensificationRatio, setIntensificationRatio] = useState(0);

  const handleIntensificationRatioChange = (event) => {
    setIntensificationRatio(event.target.value);
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
              type="text"
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
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default ViscosityCurve;
