import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://web20dayones-todo-development.herokuapp.com",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
};

export default axiosWithAuth;
