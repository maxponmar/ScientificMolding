import "./ViscosityCurve.scss";
import "handsontable/dist/handsontable.min.css";
import { useState, useReducer } from "react";
import { HotTable, HotColumn } from "@handsontable/react";
import { Line } from "react-chartjs-2";

import {
  defaultDataset,
  defaultChartdata,
  dataRow,
} from "./viscositycurve-dataset";
import chartOptions from "../chartoptions";

let dataset = defaultDataset;

let chartData = defaultChartdata;

let viscosityData = [0];
let injectionSpeedData = [0];

function ViscosityCurve() {
  const [intensificationRatio, setIntensificationRatio] = useState(11.45);
  const [numberOfRows, setNumberOfRows] = useState(0);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const updateChart = () => {
    viscosityData = dataset.map((element) => element["Viscosity"]);
    injectionSpeedData = dataset.map((element) => element["InjectionSpeed"]);
    chartData = {
      labels: injectionSpeedData,
      datasets: [
        {
          label: "Viscosity",
          data: viscosityData,
          fill: false,
          backgroundColor: "rgb(0, 0, 0)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
  };

  const addRow = () => {
    dataset.push(dataRow);
    forceUpdate();
  };

  const addRows = () => {
    for (let index = 0; index < numberOfRows; index++) {
      dataset.push(dataRow);
    }
    forceUpdate();
  };

  const deletLastRow = () => {
    dataset.splice(-1, 1);
    forceUpdate();
  };

  const deleteAllRows = () => {
    dataset = [dataRow];
    forceUpdate();
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
    forceUpdate();
  };

  const handleIntensificationRatioChange = (event) => {
    setIntensificationRatio(event.target.value);
    calculate();
  };

  const handleNumberRows = (event) => {
    if (event.target.value > 0) {
      setNumberOfRows(event.target.value);
    }
  };

  return (
    <div className="viscositycurve">
      <h2 className="study-title">Viscosity Curve</h2>
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
            <input
              type="number"
              placeholder="5"
              id="nRows"
              onChange={handleNumberRows}
            />
            <button
              className="btn btn-blue btn-left"
              type="button"
              onClick={addRows}
            >
              Add Rows
            </button>
            <button
              className="btn btn-red btn-right"
              type="button"
              onClick={deleteAllRows}
            >
              Delete All Rows
            </button>
          </div>
          <div className="viscositycurve__form--inputgroup">
            <button
              className="btn btn-blue btn-left"
              type="button"
              onClick={addRow}
            >
              Add Row
            </button>
            <button
              className="btn btn-red btn-right"
              type="button"
              onClick={deletLastRow}
            >
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
          <div className="table-wrapper viscositycurve__table">
            <HotTable
              licenseKey="non-commercial-and-evaluation"
              colHeaders={true}
              rowHeaders={true}
              contextMenu={true}
              data={dataset}
            >
              <HotColumn data="InjectionSpeed" title="Injection Speed" />
              <HotColumn data="FillTime" title="Fill Time" />
              <HotColumn data="InjectionPressure" title="Injection Pressure" />
              <HotColumn
                data="PlasticPressure"
                title="Plastic Pressure"
                readOnly={true}
              />
              <HotColumn data="ShearRate" title="Shear Rate" readOnly={true} />
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
        <Line
          data={chartData}
          options={chartOptions}
          width="90vw"
          height="90vh"
        />
      </div>
    </div>
  );
}

export default ViscosityCurve;
