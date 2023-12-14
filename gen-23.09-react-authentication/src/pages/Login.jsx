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
        console.log(user);
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        navigate("/admin");
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
            <div>
              Email: <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={setInputValue}
              />
            </div>
            <br />
            <div>
              Password: <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={setInputValue}
              />
            </div>
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
