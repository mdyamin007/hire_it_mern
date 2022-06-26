import axios from "axios";

export const BASE_URL = "http://localhost:5000";

const user = JSON.parse(localStorage.getItem("user"))

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": user?.authToken,
    "user_id": user?.userId
  },
});

export default api;
