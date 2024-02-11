const { BlobServiceClient } = require("@azure/storage-blob");

class AzureBlobService {
  constructor(connectionString) {
    this.blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
  }

  async uploadVideos(containerName, files) {
    const containerClient =
      this.blobServiceClient.getContainerClient(containerName);
    const uploadPromises = files.map(async (file) => {
      const blobName = file.originalname;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      try {
        await blockBlobClient.uploadFile(file.path);
        console.log(`Uploaded video "${blobName}" successfully.`);
        return blobName;
      } catch (error) {
        console.error("Error uploading video:", error);
        throw error;
      }
    });

    try {
      const uploadedVideos = await Promise.all(uploadPromises);
      console.log("All videos uploaded successfully:", uploadedVideos);
      return uploadedVideos;
    } catch (error) {
      console.error("Error uploading videos:", error);
      throw error;
    }
  }
}

module.exports = AzureBlobService;
