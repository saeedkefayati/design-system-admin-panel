import { Paper, Tabs, useMantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IoAlertCircleOutline,
  IoIdCardOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import AvatarSection from "./Avatar";
import ProfileSection from "./Profile";
import SettingSection from "./Setting";

const TabProfile = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const { t } = useTranslation();

  return (
    <Paper shadow="sm" p="lg" radius="md" withBorder>
      <Tabs
        // defaultValue="setting"
        color={theme.primaryColor}
        variant="pills"
        value={tabValue}
        onTabChange={(value) => navigate(`/profile/${value}`)}
      >
        <Tabs.List>
          <Tabs.Tab value="info" icon={<IoAlertCircleOutline size={16} />}>
            {t("profile.info")}
          </Tabs.Tab>
          <Tabs.Tab value="setting" icon={<IoSettingsOutline size={16} />}>
            {t("profile.setting")}
          </Tabs.Tab>
          <Tabs.Tab value="avatar" icon={<IoIdCardOutline size={16} />}>
            {t("profile.avatar")}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="info" pt="xs">
          <ProfileSection />
        </Tabs.Panel>
        <Tabs.Panel value="setting" pt="xs">
          <SettingSection />
        </Tabs.Panel>
        <Tabs.Panel value="avatar" pt="xs">
          <AvatarSection />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default TabProfile;
