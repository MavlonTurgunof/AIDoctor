import axios from "axios";

const request = axios.create({
  baseURL: "https://backend.xorazmfc.uz/api/v1",
});

export default request;
