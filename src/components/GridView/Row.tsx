import React from "react";
import { countries } from "../../views/GridView/countryData.mock";

interface IRowType {
  headerCell: any;
  cells: any[];
}

const Row = ({ headerCell, cells }: IRowType) => {
  const Countries: any = countries;
  return (
    <tr>
      <th scope="col">{Countries[headerCell.value]}</th>
      {cells.map((item: any, index: number) => {
        return (
          item &&
          <td key={index}>
            <label
              htmlFor=""
              className={
                item.isExclusive ? `badge badge-danger` : `badge badge-success`
              }
            >
              {item.isExclusive ? "Unavailable" : "Non-Exclusive"}
            </label>
          </td>
        );
      })}
    </tr>
  );
};

export default Row;
