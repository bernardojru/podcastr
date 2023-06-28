import axios from "axios";

export const fre = axios.create({
  baseURL: "http://localhost:5000/",
});

export const pre = axios.create({
  baseURL: "http://localhost:8000/",
});

export const server = axios.create({
  baseURL: "http://localhost:3000/",
});
