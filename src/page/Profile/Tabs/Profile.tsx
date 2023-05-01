import { Button, Stack, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  IoAtOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { UsePostTest } from "~/hook/UseTest";
import { ProfileInformationSchema } from "~/schema/Profile";
import { ProfileInformationInput } from "~/types/form";

const ProfileSection = () => {
  const id = useId();
  const { isLoading, mutate } = UsePostTest();
  const { t } = useTranslation();

  const form = useForm<ProfileInformationInput>({
    validate: zodResolver(ProfileInformationSchema),
    initialValues: {
      username: "saeedkefayati",
      email: "s.kefayati2012@gmail.com",
      phone: "09120470553",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        mutate("hi");
      })}
    >
      <Stack>
        <TextInput
          id={id}
          label={t("profile.username")}
          icon={<IoPersonOutline size={16} />}
          disabled={isLoading}
          {...form.getInputProps("username")}
        />
        <TextInput
          id={id}
          label={t("profile.email")}
          icon={<IoAtOutline size={16} />}
          disabled={isLoading}
          {...form.getInputProps("email")}
        />
        <TextInput
          id={id}
          label={t("profile.phone")}
          icon={<IoPhonePortraitOutline size={16} />}
          disabled={isLoading}
          {...form.getInputProps("phone")}
        />
        <Button type="submit" loading={isLoading}>
          {t("profile.info-change")}
        </Button>
      </Stack>
    </form>
  );
};

export default ProfileSection;
