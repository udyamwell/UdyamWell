import React, { useState, useEffect } from "react";
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
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="Responses" style={{ width: "90%", margin: "0 auto" }}>
      <h2>Sell On ONDC Responses</h2>
      <ul style={{ background: "green" }}>
        {responses.map((response, index) => (
          <li key={response._id}>
            <ul>
              <li>Name: {response.name}</li>
              <li>Emai: {response.email}</li>
              <li>Phone Number:{response.phoneNum}</li>
              <li>Enterprise Name: {response.eName}</li>
              <li>Business Address:{response.businessAdd}</li>
              <li>Business Involved:{response.businessInvolved}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsePage;
