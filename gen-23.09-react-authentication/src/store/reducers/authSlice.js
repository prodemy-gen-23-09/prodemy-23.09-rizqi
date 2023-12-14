import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: "",
  user: {
    id: "",
    email: "",
    username: "",
  },
};

function getStoredAuthState() {
  const storedToken = localStorage.getItem("token");
  const storedUserString = localStorage.getItem("user");

  if (storedToken) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + storedToken;
    return {
      token: storedToken,
      user: JSON.parse(storedUserString),
    };
  }

  return { ...initialState };
}

const authSlice = createSlice({
  name: "auth",
  initialState: getStoredAuthState(),
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    },
    setUser(state, action) {
      const { id, email, username } = action.payload;
      state.user.id = id;
      state.user.email = email;
      state.user.username = username;
      localStorage.setItem("user", JSON.stringify({ id, email, username }));
    },
    resetAuthData() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];
      return { ...initialState };
    },
  },
});

export const { setToken, setUser, resetAuthData } = authSlice.actions;
export default authSlice.reducer;
