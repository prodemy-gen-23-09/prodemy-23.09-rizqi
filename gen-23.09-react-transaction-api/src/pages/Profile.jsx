import BannerImage from "../components/User/BannerImage";
import { useSelector } from "react-redux";
import Person from "../assets/home/banner-home.png";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getAllUsers } from "../service/users";

export default function Profile() {
  const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
    postalcode: yup.string().required("Postal Code is required"),
    phone: yup.string().required("Phone is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const user = useSelector((state) => state.auth.user);
  const { mutate } = getAllUsers(user.id);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        setValue("password", userProfileData.password);

        setDataProfile(userProfileData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    mutate();
    fetchProfileData();
  }, [setValue, user, mutate]);

  const onSubmitForm = async (data) => {
    try {
      // Exclude the password field from the data
      const { password, ...updatedProfileData } = data;

      await axios
        .put(`http://localhost:3000/users/${user.id}`, updatedProfileData)
        .then(() => {
          alert("Profile updated successfully!");
        });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  console.log(dataProfile);

  return (
    <>
      <BannerImage title="Profile" />
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
                <p className="error text-red-600">{errors.username?.message}</p>
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
                <p className="error text-red-600">{errors.address?.message}</p>
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
                <p className="error text-red-600">
                  {errors.postalcode?.message}
                </p>
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
                <p className="error text-red-600">{errors.phone?.message}</p>
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
                <p className="error text-red-600">{errors.email?.message}</p>
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
