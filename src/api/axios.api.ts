// http://localhost:3000/

import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper";

export const instance = axios.create({
  baseURL: "http://localhost:5002/api",
  headers: {
    Authorization: "Bearer " + getTokenFromLocalStorage() || "",
  },
});
