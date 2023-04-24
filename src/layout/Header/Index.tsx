import {
  ActionIcon,
  Burger,
  Flex,
  Header,
  MantineTheme,
  MediaQuery,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import { Dispatch, SetStateAction } from "react";
import {
  IoContractOutline,
  IoExpandOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import SalamtNewsLogo from "~/components/core/SalamtNewsLogo";
import SelectLanguage from "~/components/shared/SelectLanguage";
import MenuHeader from "./Menu";

type HeaderProps = {
  theme: MantineTheme;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

const HeaderLayout = ({ theme, opened, setOpened }: HeaderProps) => {
  const { toggle, fullscreen } = useFullscreen();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = theme.colorScheme === "dark";

  return (
    <Header height={{ base: 70 }} p="lg">
      <Flex align="center" h="100%">
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Flex
          w="100%"
          gap={{ base: "xs", sm: "md" }}
          align="center"
          justify="space-between"
        >
          <Link to="/" style={{ display: "flex" }}>
            <SalamtNewsLogo />
          </Link>
          <Flex gap={{ base: "xs", sm: "md" }} align="center">
            <Tooltip label="Ctrl + F">
              <ActionIcon
                variant="subtle"
                color={theme.primaryColor}
                onClick={toggle}
                title="toggle fullscreen"
                size="lg"
              >
                {fullscreen ? (
                  <IoContractOutline color={theme.primaryColor} />
                ) : (
                  <IoExpandOutline color={theme.primaryColor} />
                )}
              </ActionIcon>
            </Tooltip>
            <SelectLanguage />
            {/* <SelectLanguage w={75} /> */}
            <Tooltip label="Ctrl + J">
              <ActionIcon
                variant="subtle"
                color={dark ? "yellow" : "dark"}
                onClick={() => toggleColorScheme()}
                title="toggle color scheme"
                size="lg"
              >
                {dark ? (
                  <IoSunnyOutline color={theme.colors.yellow[5]} />
                ) : (
                  <IoMoonOutline color={theme.colors.dark[5]} />
                )}
              </ActionIcon>
            </Tooltip>
            <MenuHeader />
          </Flex>
        </Flex>
      </Flex>
    </Header>
  );
};

export default HeaderLayout;
