import axios from "axios";

const fetchImageAsBlob = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "blob" });
    return response.data;
  } catch (error) {
    console.error("Error fetching image as blob:", error);
    throw error;
  }
};

const commonService = {
  fetchImageAsBlob,
};

export default commonService;
