import axios from "axios";

const url = "http://localhost:3000/products";

export const getAllProduct = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
