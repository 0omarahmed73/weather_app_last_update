import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.weatherapi.com/v1/forecast.json?key=1857930fadd948639c6160202242406&days=1",
})