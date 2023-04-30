import { AppShell, Container, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Idle from "~/components/shared/Idle";
import Header from "./Header/Index";
import Navbar from "./Navbar";

const Layout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <Idle />
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="md"
        navbar={<Navbar hidden={!opened} />}
        header={<Header opened={opened} setOpened={setOpened} theme={theme} />}
      >
        <Container fluid>
          <Outlet />
        </Container>
      </AppShell>
    </>
  );
};

export default Layout;
