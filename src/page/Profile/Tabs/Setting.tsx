import { PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { IoLockClosedOutline } from "react-icons/io5";

const SettingSection = () => {
  const id = useId();
  const { t } = useTranslation();
  const [visible, { toggle }] = useDisclosure();

  return (
    <>
      <Stack>
        <PasswordInput
          id={id}
          icon={<IoLockClosedOutline size={16} />}
          label={t("profile.password")}
          defaultValue="secret"
          visible={visible}
          onVisibilityChange={toggle}
        />
        <PasswordInput
          id={id}
          icon={<IoLockClosedOutline size={16} />}
          label={t("profile.confirm-password")}
          defaultValue="secret"
          visible={visible}
          onVisibilityChange={toggle}
        />
      </Stack>
    </>
  );
};

export default SettingSection;
