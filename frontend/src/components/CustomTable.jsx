import React from "react";

const CustomTable = ({ heading, columns, data, style }) => {
  return (
    <div>
      <table style={style}>
        <thead>
          <tr>
            <th colSpan={columns.length}>{heading}</th>
          </tr>
          <tr
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "120px",
              width: "300px",
            }}
          >
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "300px",
              }}
              key={rowIndex}
            >
              {row.map((cell, cellIndex) => (
                <td
                  style={{
                    paddingTop: "10px",
                    minWidth: "80px",
                  }}
                  key={cellIndex}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
