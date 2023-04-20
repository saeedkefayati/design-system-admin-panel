import { Tabs } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IoAlertCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import ProfileSection from "./Profile";
import SettingSection from "./Setting";

const TabProfile = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const { t } = useTranslation();

  return (
    <Tabs
      // defaultValue="setting"
      color="blue"
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
      </Tabs.List>
      <Tabs.Panel value="info" pt="xs">
        <ProfileSection />
      </Tabs.Panel>
      <Tabs.Panel value="setting" pt="xs">
        <SettingSection />
      </Tabs.Panel>
    </Tabs>
  );
};

export default TabProfile;
