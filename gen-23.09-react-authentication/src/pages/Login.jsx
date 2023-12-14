import ImageHome from "../assets/home/banner-home.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../store/reducers/authSlice.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        reset();
      })
      .catch((error) => console.log(error));
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <img className="w-full" src={ImageHome} alt="Banner" />
      <div className="absolute bg-white rounded-xl shadow-xl p-10 w-[450px]">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-center text-3xl text-color1_selected">
            Login
          </p>
          <form onSubmit={handleSubmit(onSubmitForm)}>
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
                  autoComplete="email"
                  {...register("email")}
                />
                <p className="error text-sm text-red-600">
                  {errors.email?.message}
                </p>
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
                  autoComplete="current-password"
                  {...register("password")}
                />
                <p className="error text-sm text-red-600">
                  {errors.password?.message}
                </p>
              </label>
              <button className="bg-color1_selected hover:bg-color_home hover:text-color1_selected p-3 rounded-md text-color_home mt-2">
                Login
              </button>
            </div>
          </form>
          <p className="mx-auto">
            Don&apos;t have an account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={handleSignUp}
            >
              {" "}
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
