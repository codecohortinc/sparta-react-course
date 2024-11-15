import axios from "axios";
import { apiFunction } from "./config";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const fetchDataFromApi = async (url) => {
  const { data } = await apiFunction.get(`${BASE_URL}/${url}`);
  return data;
};
