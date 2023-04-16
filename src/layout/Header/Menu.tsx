import { Avatar, Box, Menu, Text, useMantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const MenuHeader = () => {
  const { t } = useTranslation();
  const theme = useMantineTheme();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar
          radius="xl"
          size={34}
          alt="user avatar"
          color={theme.colors.blue[5]}
          style={{ cursor: "pointer" }}
        >
          JD
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <Box>
            <Text fw="bold">John Doe</Text>
          </Box>
        </Menu.Item>
        <Menu.Divider />
        <Link to="/">
          <Menu.Item
            icon={<IoPersonCircleOutline color={theme.colors.blue[5]} />}
          >
            {t("menu.dashboard")}
          </Menu.Item>
        </Link>
        <Menu.Divider />
        <Menu.Item
          color="red"
          icon={<IoLogOutOutline color={theme.colors.red[5]} />}
        >
          {t("home.logout")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuHeader;
