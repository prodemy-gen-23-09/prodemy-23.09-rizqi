/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ButtonCart from "./ButtonCart";
import axios from "axios";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../../store/reducers/CartSlice";
import ButtonWishlist from "./ButtonWishlist";

const fetcher = (url) => axios.get(url).then((response) => response.data);

export default function QuantityProduct() {
  const { id } = useParams();
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSWR(`http://localhost:3000/products/${id}`, fetcher);
  const { cart } = useSWR(`http://localhost:3000/cart`, fetcher);
  const user = useSelector((state) => state.auth.user);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const { id, thumbnail, title, price } = data;
    const items = {
      id: id,
      thumbnail: thumbnail,
      title: title,
      price: price,
      quantity: count,
      userId: user.id,
      username: user.username,
      email: user.email,
    };
    axios
      .post("http://localhost:3000/cart", items)
      .then((response) => {
        console.log("Item added to cart:", response.data);
        dispatch(addToCart(items));
        navigate(`/cart/${user.id}`);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  console.log(cart);

  return (
    <>
      <div className="flex gap-10 mt-20">
        <div className="flex flex-row h-16 w-36 rounded-xl relative bg-transparent mt-1 border-2">
          <button
            className="h-full w-20 rounded-3xl cursor-pointer"
            onClick={decrement}
          >
            <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
              -
            </span>
          </button>
          <div className="justify-center w-full font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none">
            {count}
          </div>
          <button className="h-full w-20 cursor-pointer" onClick={increment}>
            <span className="m-auto text-2xl font-thin text-black hover:text-color1_selected">
              +
            </span>
          </button>
        </div>
        <ButtonWishlist />
        <ButtonCart count={count} handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
}
