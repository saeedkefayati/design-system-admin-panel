import { Notifications } from "@mantine/notifications";

const ProviderNotification = () => {
  return <Notifications limit={4} position="top-right" autoClose={5000} />;
};

export default ProviderNotification;
