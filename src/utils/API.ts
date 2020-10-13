import Axios from "axios";

const API = Axios.create({
  baseURL: "/assets/json",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default API;
