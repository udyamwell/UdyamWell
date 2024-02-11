import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
};

export default LoadingSpinner;
