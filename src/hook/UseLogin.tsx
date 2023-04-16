import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Login, Logout } from "~/api/auth";
import { clearStorage, getTokenStorage, setStorageItem } from "~/util/storage";
import { toastSuccess } from "~/util/toast";

const UseLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: Login,
    onSuccess: (data: any) => {
      queryClient.setQueryData(["login"], data);
      setStorageItem("token", "eyJhbGciOiJIUzI1NiIsInR");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
  });
};

const UseLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const tokenStorage = getTokenStorage();

  return useMutation({
    mutationFn: () => Logout(tokenStorage),
    onSuccess: (data: any) => {
      toastSuccess({ title: data.title, message: data.message });
      queryClient.clear();
      clearStorage();
      navigate("/login", { replace: true });
    },
  });
};

export { UseLogin, UseLogout };
