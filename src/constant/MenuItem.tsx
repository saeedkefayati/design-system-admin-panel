import { ReactNode } from "react";
import {
  IoBarChartOutline,
  IoFileTrayOutline,
  IoGridOutline,
  IoKeyOutline,
  IoLogInOutline,
  IoPieChartOutline,
  IoWarningOutline,
} from "react-icons/io5";

type MenuItemProps = {
  id: number;
  key: string;
  link: string;
  icon: ReactNode;
}[];

const MenuItem: MenuItemProps = [
  {
    id: 0,
    key: "dashboard",
    link: "/",
    icon: <IoPieChartOutline size={20} />,
  },
  {
    id: 1,
    key: "login",
    link: "/login",
    icon: <IoLogInOutline size={20} />,
  },
  {
    id: 2,
    key: "forget-password",
    link: "/forget-password",
    icon: <IoKeyOutline size={20} />,
  },
  {
    id: 3,
    key: "not-found",
    link: "/not-found",
    icon: <IoWarningOutline size={20} />,
  },
  {
    id: 4,
    key: "chart",
    link: "/chart",
    icon: <IoBarChartOutline size={20} />,
  },
  {
    id: 5,
    key: "table",
    link: "/table",
    icon: <IoGridOutline size={20} />,
  },
  {
    id: 6,
    key: "card",
    link: "/card",
    icon: <IoFileTrayOutline size={20} />,
  },
];

export { MenuItem };
