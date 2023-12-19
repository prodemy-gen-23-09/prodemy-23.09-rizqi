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
