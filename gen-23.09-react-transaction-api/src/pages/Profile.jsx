/* eslint-disable no-unused-vars */
import BannerImage from "../components/User/BannerImage";
import { useSelector } from "react-redux";
import Person from "../assets/home/banner-home.png";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { mutate } from "swr";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  const { register, handleSubmit, setValue } = useForm();
  const [dataProfile, setDataProfile] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = user ? user.id : "";
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        const userProfileData = response.data;

        setValue("username", userProfileData.username);
        setValue("address", userProfileData.address);
        setValue("postalcode", userProfileData.postalcode);
        setValue("phone", userProfileData.phone);
        setValue("email", userProfileData.email);

        setDataProfile(userProfileData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    mutate();
    fetchProfileData();
  }, [setValue, user]);

  const { username, address, postalcode, phone, email } = dataProfile || {};

  useEffect(() => {
    setValue("username", username || "");
    setValue("address", address || "");
    setValue("postalcode", postalcode || "");
    setValue("phone", phone || "");
    setValue("email", email || "");
  }, [setValue, username, address, postalcode, phone, email]);

  const submitForm = async (data) => {
    console.log(data);
    try {
      const updatedProductData = {
        username: data.username,
        address: data.address,
        postalcode: data.postalcode,
        phone: data.phone,
        email: data.email,
      };

      await axios
        .put(`http://localhost:3000/users/${user.id}`, updatedProductData)
        .then(() => {
          alert("Success Edit Users!");
        });
    } catch (error) {
      console.error("Error updating Users:", error);
    }
    mutate(`http://localhost:3000/users/${user.id}`);
  };
  return (
    <>
      <BannerImage title="Profile" />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex mx-48 shadow-xl p-32 gap-6 ">
          <div className="grid grid-cols-2 gap-80">
            <div className="flex flex-col ">
              <label className="form-control w-[450px]">
                <div className="label">
                  <span className="label-text text-md font-semibold">Name</span>
                </div>
                <input
                  name="username"
                  id="username"
                  type="text"
                  className="input input-bordered w-full"
                  autoComplete="username"
                  defaultValue={dataProfile.username}
                  {...register("username")}
                />
              </label>

              <label className="form-control w-[450px]">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Address
                  </span>
                </div>
                <textarea
                  id="address"
                  name="address"
                  className="textarea textarea-bordered h-24"
                  placeholder="Bio"
                  defaultValue={dataProfile.address}
                  {...register("address")}
                />
              </label>
              <label className="form-control w-[450px]">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Postal Code
                  </span>
                </div>
                <input
                  name="postalcode"
                  id="postalcode"
                  type="number"
                  className="input input-bordered w-full"
                  autoComplete="postalcode"
                  defaultValue={dataProfile.postalcode}
                  {...register("postalcode")}
                />
                <p className="error text-red-600"></p>
              </label>
              <label className="form-control w-[450px]">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Phone
                  </span>
                </div>
                <input
                  name="phone"
                  id="phone"
                  type="number"
                  className="input input-bordered w-full"
                  autoComplete="number"
                  defaultValue={dataProfile.phone}
                  {...register("phone")}
                />
              </label>
              <label className="form-control w-[450px]">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Email
                  </span>
                </div>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="input input-bordered w-full"
                  autoComplete="email"
                  defaultValue={dataProfile.email}
                  {...register("email")}
                />
              </label>
            </div>
            <div className="flex flex-col ">
              <label className="form-control w-[450px] mb-8">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Photo
                  </span>
                </div>
                <img src={Person} alt="imgprofile" />
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Edit Photo </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    defaultValue={user.photo}
                  />
                </label>
              </label>
              <button
                className="bg-color1_selected hover:bg-color_home hover:text-color1_selected p-3 rounded-md text-color_home"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
