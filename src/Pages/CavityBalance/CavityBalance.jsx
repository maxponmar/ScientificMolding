import "./CavityBalance.scss";
import React from "react";
import "handsontable/dist/handsontable.min.css";
import { useState, useReducer } from "react";
import { HotTable, HotColumn } from "@handsontable/react";
import { Line } from "react-chartjs-2";

import {
  defaultChartDatasets,
  defaultDataset,
  colors,
} from "./cavitybalance-dataset";
import chartOptions from "../chartoptions";

let dataset = defaultDataset;
let chartData = defaultChartDatasets;
let chartLabel = ["0"];

export const CavityBalance = () => {
  return (
    <div className="cavitybalance">
      <h2 className="study-title">Cavity Balance</h2>
      <form className="cavitybalance__form">
        <div className="cavitybalance__form--inputgroup">
          <span>No. Rows</span>
          <input type="number" placeholder="5" id="nRows" />
          <button className="btn btn-blue btn-left" type="button">
            Add Rows
          </button>
          <button className="btn btn-red btn-right" type="button">
            Delete All Rows
          </button>
        </div>
        <div className="cavitybalance__form--inputgroup">
          <button className="btn btn-blue btn-left" type="button">
            Add Row
          </button>
          <button className="btn btn-red btn-right" type="button">
            Delete Last Row
          </button>

          <button className="btn btn-blue btn-left" type="button">
            Add New Column
          </button>
          <button className="btn btn-red btn-right" type="button">
            New Column
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
            <HotColumn data="weight1" title="Weight 1" />
            <HotColumn data="weight2" title="Weight 2" />
            <HotColumn data="weight3" title="Weight 3" />
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
