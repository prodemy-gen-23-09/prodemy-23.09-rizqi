/* eslint-disable no-unused-vars */
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

export const getAllUsers = (userId) => {
  const { data, error } = useSWR(
    `http://localhost:3000/cart?userId=${userId}`,
    () => fetchData(`http://localhost:3000/users/${userId}`)
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
};
