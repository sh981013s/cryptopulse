import axios from "axios";
import { COIN_BASE_URL } from "@/constants/API.ts";

export const coinInstance = axios.create({
  baseURL: COIN_BASE_URL,
});
