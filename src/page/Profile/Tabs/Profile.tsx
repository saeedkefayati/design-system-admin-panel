import { Input, Stack } from "@mantine/core";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  IoAtOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

const ProfileSection = () => {
  const { t } = useTranslation();
  const id = useId();

  return (
    <Stack>
      <Input.Wrapper id={id} label={t("profile.username")}>
        <Input
          icon={<IoPersonOutline size={16} />}
          defaultValue="saeedkefayati"
        />
      </Input.Wrapper>
      <Input.Wrapper id={id} label={t("profile.email")}>
        <Input
          icon={<IoAtOutline size={16} />}
          defaultValue="s.kefayati2012@gmail.com"
        />
      </Input.Wrapper>
      <Input.Wrapper id={id} label={t("profile.phone")}>
        <Input
          icon={<IoPhonePortraitOutline size={16} />}
          defaultValue="09120470553"
        />
      </Input.Wrapper>
    </Stack>
  );
};

export default ProfileSection;
