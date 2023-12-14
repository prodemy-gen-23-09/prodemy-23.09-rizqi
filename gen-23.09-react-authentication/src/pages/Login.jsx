import ImageHome from "../assets/home/banner-home.png";
import { useState } from "react";
import { loginUser } from "../service/loginUser";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(credentials);

      if (response.success) {
        console.log("Login successful!");
      } else {
        console.log("Login failed:", response.message);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <img className="w-full" src={ImageHome} alt="Banner" />
      <div className="absolute bg-white rounded-xl shadow-xl p-10 w-[450px]">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-center text-3xl text-color1_selected">
            Login
          </p>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button
            className="bg-color1_selected hover:bg-color_home hover:text-color1_selected p-3 rounded-md text-color_home mt-8 w-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
