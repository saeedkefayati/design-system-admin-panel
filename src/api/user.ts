import axios from "axios";
import { BlogParam } from "~/types/api";
import defaultHeaders from "./_headers";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL_2,
  headers: { ...defaultHeaders },
});

const getUsers = async ({ ...props }: BlogParam) => {
  const { data } = await api.get("/users", {
    params: { ...props },
  });
  return data;
};

export { getUsers };
