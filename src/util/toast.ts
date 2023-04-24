import { showNotification } from "@mantine/notifications";
import { ReactNode } from "react";

type Toast = {
  title: string;
  message: string;
  icon?: ReactNode;
};

export const toastError = ({ title, message, icon }: Toast) => {
  showNotification({
    color: "red",
    title,
    message,
    icon,
  });
};

export const toastSuccess = ({ title, message, icon }: Toast) => {
  showNotification({
    color: "green",
    title,
    message,
    icon,
  });
};
