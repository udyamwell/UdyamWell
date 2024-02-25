import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./ResponsePage.css";

const ResponsePage = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.udyamwell.com/ondc-seller/get-seller"
        );
        const data = await response.json();
        setResponses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(responses);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const fileName = "responses.xlsx";
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div
      className="Responses"
      style={{ width: "90%", margin: "0 auto", overflowX: "auto" }}
    >
      <h2>Sell On ONDC Responses</h2>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Enterprise Name</th>
            <th>Business Address</th>
            <th>Business Involved</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response, index) => (
            <tr key={response._id}>
              <td style={{ padding: "10px" }}>{response.name}</td>
              <td style={{ padding: "10px" }}>{response.email}</td>
              <td style={{ padding: "10px" }}>{response.phoneNum}</td>
              <td style={{ padding: "10px" }}>{response.eName}</td>
              <td style={{ padding: "10px" }}>{response.businessAdd}</td>
              <td style={{ padding: "10px" }}>{response.businessInvolved}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn" onClick={downloadExcel}>
        Download as Excel
      </button>
    </div>
  );
};

export default ResponsePage;
