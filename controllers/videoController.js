const AzureBlobService = require("../services/azureBlobService");
const upload = require("../middleware/uploadMiddleware");

const connectionString =
  "DefaultEndpointsProtocol=https;AccountName=videostreamingblob;AccountKey=5Z8s4LZoZSkhc4Kved+Uo0T7l1rgwGeUjGTQI+28o/1oG8iOZ5QsDOUpDGAWr2CaMyWZm0eX/0k5+AStyfEBwQ==;EndpointSuffix=core.windows.net";
const azureBlobService = new AzureBlobService(connectionString);

async function uploadVideos(req, res) {
  const containerName = "udyamwellvideolecture";

  try {
    const uploadedVideos = await azureBlobService.uploadVideos(
      containerName,
      req.files
    );
    res.send("Videos uploaded successfully: " + uploadedVideos.join(", "));
  } catch (error) {
    console.error("Error uploading videos:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  uploadVideos,
};
