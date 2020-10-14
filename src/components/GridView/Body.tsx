import React from "react";
import Row from "./Row";

interface IBodyType {
  rowHeader: any[];
  columnHeader: any[];
  tableData: any;
}

const Body = ({ rowHeader, columnHeader, tableData }: IBodyType) => {
  return (
    <tbody>
      {rowHeader.map((item, index) => {
        const rowData = columnHeader.slice(1).map((header: any) => {
          return tableData[header.value][item.value];
        });
        return <Row headerCell={item} cells={rowData} key={index} />;
      })}
    </tbody>
  );
};

export default Body;
