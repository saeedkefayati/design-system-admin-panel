import {
  IoBarChartOutline,
  IoFileTrayOutline,
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
    icon: <IoPieChartOutline />,
  },
  {
    id: 1,
    key: "login",
    link: "/login",
    icon: <IoLogInOutline />,
  },
  {
    id: 2,
    key: "forget-password",
    link: "/forget-password",
    icon: <IoKeyOutline />,
  },
  {
    id: 3,
    key: "not-found",
    link: "/not-found",
    icon: <IoWarningOutline />,
  },
  {
    id: 4,
    key: "chart",
    link: "/chart",
    icon: <IoBarChartOutline />,
  },
  {
    id: 5,
    key: "table",
    link: "/table",
    icon: <IoBarChartOutline />,
  },
  {
    id: 6,
    key: "card",
    link: "/card",
    icon: <IoFileTrayOutline />,
  },
];

export { MenuItem };
