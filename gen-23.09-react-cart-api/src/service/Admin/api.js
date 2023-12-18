/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import axios from "axios";
import useSWR, { mutate } from "swr";

export const fetchData = async (url) => {
  const data = await axios
    .get(url, { headers: { "Cache-Control": "no-cache" } })
    .then((res) => res.data);
  return data;
};

export const getAllProducts = () => {
  const { data, error } = useSWR(
    "http://localhost:3000/products",
    fetchData,
    mutate("http://localhost:3000/products")
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
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

export const getAllCart = (userId) => {
  const { data, error } = useSWR(
    `http://localhost:3000/cart?userId=${userId}`,
    () => fetchData(`http://localhost:3000/cart?userId=${userId}`)
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const getAllUsers = () => {
  const { data, error } = useSWR(
    "http://localhost:3000/users",
    fetchData,
    mutate("http://localhost:3000/users")
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
