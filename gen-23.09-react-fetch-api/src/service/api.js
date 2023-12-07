import axios from "axios";

const url = "http://localhost:3000/products";

export const getAllProduct = async () => {
  const response = await axios.get(url);
  return response.data;
};
