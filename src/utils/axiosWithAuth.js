import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://friendly-ritchie-5a999e.netlify.app/",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
};

export default axiosWithAuth;
