import axios from "axios";

export const axiosClient = axios.create({ baseURL: "https://world.openfoodfacts.org" });
