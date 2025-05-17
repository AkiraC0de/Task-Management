import axios from "axios";
import { BASE_URL } from "../config/api.js";

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})