import { Badge, Card, Flex, Space, Text, Title } from "@mantine/core";
import { useNetwork, useOs } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { SiAndroid, SiIos, SiLinux, SiMacos, SiWindows } from "react-icons/si";

const CheckDevice = () => {
  const { t } = useTranslation();
  const OS = useOs();
  const network = useNetwork();

  return (
    <>
      {OS !== "undetermined" ? (
        <Card radius="md" withBorder>
          <Title order={5}>{t("home.information")}</Title>
          <Space h="md" />
          <Flex gap="md" align="center" justify="space-between">
            <Text>{t("home.network")} :</Text>
            <Title order={5}>
              {network.online ? (
                <Badge color="green">{t("home.online")}</Badge>
              ) : (
                <Badge color="red">{t("home.offline")}</Badge>
              )}
            </Title>
          </Flex>
          <Space h="md" />
          <Flex align="center" justify="space-between">
            <Text>{t("home.device")} :</Text>
            <Flex gap="md" align="center" justify="flex-end">
              <Text>
                {OS === "android" && <SiAndroid color="#3DDC84" />}
                {OS === "ios" && <SiIos color="#000000" />}
                {OS === "windows" && <SiWindows color="#0078D4" />}
                {OS === "macos" && <SiMacos color="#000000" />}
                {OS === "linux" && <SiLinux color="#FCC624" />}
              </Text>
              <Title order={5}>{OS.toUpperCase()}</Title>
            </Flex>
          </Flex>
        </Card>
      ) : null}
    </>
  );
};

export default CheckDevice;
