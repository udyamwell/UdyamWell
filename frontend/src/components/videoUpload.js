import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("videos", selectedFiles[i]);
    }

    try {
      await axios.post("http://localhost:8080/videos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Videos uploaded successfully");
    } catch (error) {
      console.error("Error uploading videos:", error);
    }
  };

  return (
    <div style={{ margin: "10%" }}>
      <h2>Upload Videos</h2>
      <input
        type="file"
        accept="video/*"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUpload;
