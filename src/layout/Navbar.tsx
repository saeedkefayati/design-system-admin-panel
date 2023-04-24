import {
  Group,
  Navbar,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { MenuItem } from "~/constant/MenuItem";

type NavbarLayoutProps = {
  hidden: boolean;
};

const NavbarLayout = ({ hidden }: NavbarLayoutProps) => {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="md"
      hidden={hidden}
      width={{ sm: 300, lg: 300 }}
    >
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <SimpleGrid cols={1} verticalSpacing="xs" spacing="xs">
          {MenuItem.map((item) => (
            <NavLink
              to={item.link}
              key={crypto.randomUUID()}
              style={({ isActive }) =>
                isActive
                  ? {
                      borderRadius: "4px",
                      backgroundColor: dark
                        ? theme.colors.dark[5]
                        : theme.primaryColor,
                      color: dark ? theme.colors.dark[0] : theme.white,
                      display: "flex",
                    }
                  : { color: "currentcolor", display: "flex" }
              }
              end
            >
              <UnstyledButton
                sx={() => ({
                  width: "100%",
                  padding: 8,
                  borderRadius: theme.radius.sm,
                  color: "inherit",
                  fontWeight: "inherit",

                  "&:hover": {
                    backgroundColor: dark
                      ? theme.colors.dark[5]
                      : theme.primaryColor,
                    color: theme.white,
                  },
                })}
              >
                <Group>
                  <ThemeIcon variant="light" size="lg">
                    {item.icon}
                  </ThemeIcon>
                  <Text
                    size="md"
                    style={{ color: "inherit", fontWeight: "inherit" }}
                  >
                    {t(`menu.${item.key}`)}
                  </Text>
                </Group>
              </UnstyledButton>
            </NavLink>
          ))}
        </SimpleGrid>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarLayout;
