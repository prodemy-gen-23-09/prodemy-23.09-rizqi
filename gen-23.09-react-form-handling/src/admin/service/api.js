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
