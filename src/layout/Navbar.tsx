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
                        : theme.colors.blue[5],
                      color: dark ? theme.colors.dark[0] : theme.white,
                      fontWeight: "700",
                    }
                  : { color: "currentcolor" }
              }
              end
            >
              <UnstyledButton
                sx={() => ({
                  width: "100%",
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color: "inherit",
                  fontWeight: "inherit",

                  "&:hover": {
                    backgroundColor: dark
                      ? theme.colors.dark[5]
                      : theme.colors.blue[5],
                    color: theme.white,
                  },

                  "&:focus": {
                    backgroundColor: dark
                      ? theme.colors.dark[6]
                      : theme.colors.blue[6],
                  },
                })}
              >
                <Group>
                  <ThemeIcon
                    color={dark ? theme.colors.dark[1] : theme.colors.blue[1]}
                    variant="light"
                    size="lg"
                  >
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
