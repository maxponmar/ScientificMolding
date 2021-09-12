import "./CavityBalance.scss";
import React from "react";
import "handsontable/dist/handsontable.min.css";
import { useState, useReducer } from "react";
import { HotTable, HotColumn } from "@handsontable/react";
import { Line } from "react-chartjs-2";

import {
  defaultChartDatasets,
  defaultDataset,
  getRandomColor,
} from "./cavitybalance-dataset";
import chartOptions from "../chartoptions";

let dataset = defaultDataset;
let chartData = {
  datasets: [],
};
// let chartLabel = ["0"];

let noColumns = 3;
let columns = [];

chartData.datasets.forEach((element) => {
  let color = getRandomColor();
  element["backgroundColor"] = color;
  element["borderColor"] = color;
});

const renderColumns = () => {
  let index = 0;
  for (const [key, value] of Object.entries(dataset[0])) {
    index++;
    columns.push(<HotColumn data={key} title={"Weight " + index} />);
  }
  chartData.datasets.push({ data: [1, 1, 1], label: "Weight 1" });
};

renderColumns();

export const CavityBalance = () => {
  const [numberOfRows, setNumberOfRows] = useState(0);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const updateChartColors = () => {
    chartData.datasets.forEach((element) => {
      let color = getRandomColor();
      element["backgroundColor"] = color;
      element["borderColor"] = color;
    });
  };

  const handleNumberofRows = (event) => {
    setNumberOfRows(event.target.value);
  };

  const generateNewRow = () => {
    let columnNames = Object.entries(dataset[0]);
    let newRow = {};
    let index = 0;
    columnNames.forEach((element) => {
      newRow[columnNames[index][0]] = 0;
      index++;
    });
    return newRow;
  };

  const addRow = () => {
    dataset.push(generateNewRow());
    forceUpdate();
  };

  const addRows = () => {
    let newRow = generateNewRow();
    for (var i = 0; i < numberOfRows; i++) {
      dataset.push(newRow);
    }
    forceUpdate();
  };

  const deleteLastRow = () => {
    dataset.splice(-1, 1);
    forceUpdate();
  };

  const deleteAllRows = () => {
    let row = generateNewRow();
    dataset = [{ row }];
    forceUpdate();
  };

  const addColumn = () => {
    noColumns++;

    dataset.forEach((element) => {
      element["weight" + String(noColumns)] = 0;
    });
    columns.push(
      <HotColumn
        data={"weight" + String(noColumns)}
        title={"Weight " + String(noColumns)}
      />
    );
    forceUpdate();
  };

  return (
    <div className="cavitybalance">
      <h2 className="study-title">Cavity Balance</h2>
      <form className="cavitybalance__form">
        <div className="cavitybalance__form--inputgroup">
          <span>No. Rows</span>
          <input
            type="number"
            placeholder="5"
            id="nRows"
            onChange={handleNumberofRows}
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
        <div className="cavitybalance__form--inputgroup">
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
            onClick={deleteLastRow}
          >
            Delete Last Row
          </button>

          <button
            className="btn btn-blue btn-left"
            type="button"
            onClick={addColumn}
          >
            Add New Column
          </button>
          <button className="btn btn-red btn-right" type="button">
            Delete Column
          </button>
        </div>
        <h3 className="cavitybalance__label">Input Data</h3>
        <div className="table-wrapper cavitybalance__table">
          <HotTable
            licenseKey="non-commercial-and-evaluation"
            colHeaders={true}
            rowHeaders={true}
            contextMenu={true}
            data={dataset}
          >
            {columns}
          </HotTable>
        </div>
        <button className="btn btn-calculate" type="button">
          Calculate
        </button>
        <div className="cavitybalance__chart">
          <Line
            data={chartData}
            options={chartOptions}
            width="400"
            height="400"
          />
        </div>
      </form>
    </div>
  );
};
