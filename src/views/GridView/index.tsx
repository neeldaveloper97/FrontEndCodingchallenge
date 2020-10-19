import React, { useState } from "react";
import "./index.scss";
import Table from "../../components/GridView/Table";
import { getAccessToken, getAvailableRights, getHeaders } from "../../core/Api";

const GridView = () => {
  const [sellerId, setSellerId] = useState("");
  const [movieId, setMovieId] = useState("");
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState("");
  const [columnHeader, setColumnHeader] = useState({});
  const [rowHeader, setRowHeader] = useState([{}]);

  async function getAvailableRightsData() {
    setLoading(true);
    try {
      const { accessToken } = await getAccessToken(
        "1d47c327432fe8c16669414c9184e137"
      );

      const data = await getAvailableRights(
        getHeaders("GET", accessToken, "application/x-www-form-urlencoded"),
        sellerId,
        movieId
      );
      setTableData(data);

      const columnHeader = Object.keys(data).map((key) => ({
        value: key,
      }));
      columnHeader.unshift({ value: "" });
      setColumnHeader(columnHeader);

      const rowKey: any = Object.keys(data)[0];
      const rowHeader = Object.keys(data[rowKey]).map((key) => ({
        value: key,
      }));
      setRowHeader(rowHeader);

      setLoading(false);
    } catch (err) {
      console.error("Error: ", err);
      setLoading(false);
    }
  }

  return (
    <>
      <section>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            getAvailableRightsData();
          }}
        >
          <div className="form-group">
            <label htmlFor="sellerId">Seller Id :</label>
            <input
              type="text"
              className="form-control"
              name="sellerId"
              placeholder="Seller Id"
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sellerId">Movie Id :</label>
            <input
              type="text"
              className="form-control"
              name="movieId"
              placeholder="Movie Id"
              value={movieId}
              onChange={(e) => setMovieId(e.target.value)}
            />
          </div>
          <button
            className={`btn btn-primary ${loading && "disabled"}`}
            type="submit"
            disabled={loading}
          >
            Get available rights
          </button>
        </form>
      </section>
      {loading && <div className="pt-4">Fetching available rights...</div>}
      {tableData && (
        <section className="grid-view-container">
          <Table
            tableData={tableData}
            columnHeader={columnHeader}
            rowHeader={rowHeader}
          />
        </section>
      )}
    </>
  );
};

export default GridView;
