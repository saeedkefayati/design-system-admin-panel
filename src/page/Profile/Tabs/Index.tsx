import { Tabs } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import SettingSection from "./Setting";

const TabProfile = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const { t } = useTranslation();

  return (
    <Tabs
      color="dark"
      // defaultValue="setting"
      value={tabValue}
      onTabChange={(value) => navigate(`/profile/${value}`)}
      allowTabDeactivation
    >
      <Tabs.List>
        <Tabs.Tab value="setting" icon={<IoSettingsOutline size={16} />}>
          {t("profile.setting")}
        </Tabs.Tab>
        <Tabs.Tab value="cart" icon={<IoSettingsOutline size={16} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="setting" pt="xs">
        <SettingSection />
      </Tabs.Panel>
      <Tabs.Panel value="cart" pt="xs">
        Cart tab content
      </Tabs.Panel>
    </Tabs>
  );
};

export default TabProfile;
