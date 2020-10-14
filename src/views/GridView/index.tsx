import React from "react";
import "./index.scss";
import Table from "../../components/GridView/Table";
import { Tabledata } from "./data.mock";

const GridView = () => {
  const tableData: any = Tabledata;

  const columnHeader = Object.keys(tableData).map((key) => ({ value: key }));
  columnHeader.unshift({ value: "" });

  const rowKey: string = Object.keys(tableData)[0];
  const rowHeader = Object.keys(tableData[rowKey]).map((key) => ({
    value: key,
  }));

  return (
    <div className="grid-view-container">
      <Table
        tableData={tableData}
        columnHeader={columnHeader}
        rowHeader={rowHeader}
      />
    </div>
  );
};

export default GridView;
