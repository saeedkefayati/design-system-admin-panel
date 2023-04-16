import { showNotification } from "@mantine/notifications";

type Toast = {
  title: string;
  message: string;
};

export const toastError = ({ title, message }: Toast) => {
  showNotification({
    title: title,
    message: message,
    color: "red",
  });
};

export const toastSuccess = ({ title, message }: Toast) => {
  showNotification({
    title: title,
    message: message,
    color: "green",
  });
};
