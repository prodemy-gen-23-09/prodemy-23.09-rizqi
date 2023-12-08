/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import axios from "axios";
import useSWR, { mutate } from "swr";

export const fetchProducts = async (url) => {
  const data = await axios
    .get(url, { headers: { "Cache-Control": "no-cache" } })
    .then((res) => res.data);
  return data;
};

export const getAllProducts = () => {
  const { data, error } = useSWR(
    "http://localhost:3000/products",
    fetchProducts,
    mutate("http://localhost:3000/products")
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const deleteProduct = async (url, id) => {
  try {
    await axios.delete(`${url}/${id}`);
    mutate("http://localhost:3000/products");
  } catch (error) {
    console.error("Error deleting product", error);
    throw error;
  }
};

export const addProduct = async (url, newProduct) => {
  try {
    const response = await axios.post(url, newProduct);
    mutate("http://localhost:3000/products");
    return response.data;
  } catch (error) {
    console.error("Error adding product", error);
    throw error;
  }
};
