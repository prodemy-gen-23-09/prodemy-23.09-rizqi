import ImageHome from "../assets/home/banner-home.png";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../store/reducers/authSlice.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setInputValue = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", formData)
      .then((res) => {
        const accessToken = res.data.accessToken;
        const user = res.data.user;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        const destinationRoute = user.roles === "admin" ? "/admin" : "/";
        navigate(destinationRoute);
      })
      .catch((err) => {
        alert("Terjadi kesalahan");
        console.error(err);
        console.error(err.response);
      });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <img className="w-full" src={ImageHome} alt="Banner" />
      <div className="absolute bg-white rounded-xl shadow-xl p-10 w-[450px]">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-center text-3xl text-color1_selected">
            Login
          </p>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4">
              <label className="form-control w-full">
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
                  value={formData.email}
                  onChange={setInputValue}
                  autoComplete="email"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md font-semibold">
                    Password
                  </span>
                </div>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="input input-bordered w-full"
                  value={formData.password}
                  onChange={setInputValue}
                  autoComplete="current-password"
                />
              </label>
              <button className="bg-color1_selected hover:bg-color_home hover:text-color1_selected p-3 rounded-md text-color_home mt-2">
                Login
              </button>
            </div>
          </form>
          <button className="bg-color_home hover:bg-color1_selected hover:text-color_home text-color1_selected mt-2 p-3 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
