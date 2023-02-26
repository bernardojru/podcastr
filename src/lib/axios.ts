import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const server = axios.create({
  baseURL: "http://localhost:3000",
});
