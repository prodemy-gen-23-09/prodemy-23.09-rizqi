/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import axios from "axios";
import useSWR from "swr";

export const fetchProducts = async (url) => {
  const data = await axios.get(url).then((res) => res.data);
  return data;
};

export const getAllProducts = () => {
  const { data, error } = useSWR(
    "http://localhost:3000/products",
    fetchProducts
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
  } catch (error) {
    console.error("Error deleting product", error);
    throw error; // Propagating the error so that SWR can handle it
  }
};
