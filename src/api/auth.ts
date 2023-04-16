import axios from "axios";
import defaultHeaders from "./_headers";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { ...defaultHeaders },
});

const Login = async (body: any) => {
  const { data } = await api.post("/login", body);
  return data;
};

const Logout = async (token: string) => {
  const { data } = await api.delete(`/logout`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { Login, Logout };
