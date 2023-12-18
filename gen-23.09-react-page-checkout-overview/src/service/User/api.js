/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import useSWR, { mutate } from "swr";

export const fetchData = async (url) => {
  const data = await axios
    .get(url, { headers: { "Cache-Control": "no-cache" } })
    .then((res) => res.data);
  return data;
};

export const getCartLength = async (userId) => {
  const { data, error } = useSWR(
    `http://localhost:3000/cart?userId=${userId}`,
    fetchData,
    mutate(`http://localhost:3000/cart?userId=${userId}`)
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
