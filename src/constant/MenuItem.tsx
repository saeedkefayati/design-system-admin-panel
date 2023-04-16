import {
  IoBarChartOutline,
  IoKeyOutline,
  IoLogInOutline,
  IoPieChartOutline,
  IoWarningOutline,
} from "react-icons/io5";

const MenuItem = [
  {
    id: 0,
    key: "dashboard",
    link: "/",
    title: "Dashboard",
    icon: <IoPieChartOutline />,
  },
  {
    id: 1,
    key: "login",
    link: "/login",
    title: "Login",
    icon: <IoLogInOutline />,
  },
  {
    id: 2,
    key: "forget-password",
    link: "/forget-password",
    title: "Forget Password",
    icon: <IoKeyOutline />,
  },
  {
    id: 3,
    key: "not-found",
    link: "/not-found",
    title: "Not Founnd",
    icon: <IoWarningOutline />,
  },
  {
    id: 4,
    key: "chart",
    link: "/chart",
    title: "Chart",
    icon: <IoBarChartOutline />,
  },
];

export { MenuItem };
