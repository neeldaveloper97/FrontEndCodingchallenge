import React from "react";
import Body from "./Body";
import Header from "./Header";

interface ITableType {
  tableData: any;
  columnHeader: any;
  rowHeader: any[];
}

const Table = ({ tableData, columnHeader, rowHeader }: ITableType) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <Header header={columnHeader} />
        <Body
          rowHeader={rowHeader}
          columnHeader={columnHeader}
          tableData={tableData}
        />
      </table>
    </div>
  );
};

export default Table;
