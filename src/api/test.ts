import axios from "axios";
import defaultHeaders from "./_headers";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { ...defaultHeaders },
});

const getTest = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export { getTest };
