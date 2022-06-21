import axios from "axios";

const BASE_URL = "http://localhost:5000";

const user = JSON.parse(localStorage.getItem("user"))

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": user.authToken,
    "userType": user.userType,
    "userId": user.userId
  },
});

export default api;
