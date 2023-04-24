import { Button, PasswordInput, Stack } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { IoLockClosedOutline } from "react-icons/io5";
import { UsePostTest } from "~/hook/UseTest";
import { ProfilePasswordSchema } from "~/schema/Profile";

const SettingSection = () => {
  const id = useId();
  const { isLoading, mutate } = UsePostTest();
  const { t } = useTranslation();
  const [visible, { toggle }] = useDisclosure();

  const form = useForm({
    validate: zodResolver(ProfilePasswordSchema),
    initialValues: {
      password: "pass",
      confirmPassword: "pase",
    },
  });

  // const changeHandle = (e: FormEvent<HTMLInputElement>) => {
  //   console.log(e.currentTarget.value);
  // };

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        mutate("hi");
      })}
    >
      <Stack>
        <PasswordInput
          id={id}
          icon={<IoLockClosedOutline size={16} />}
          label={t("profile.password")}
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps("password")}
        />
        <PasswordInput
          id={id}
          icon={<IoLockClosedOutline size={16} />}
          label={t("profile.password-confirm")}
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps("confirmPassword")}
        />
        <Button type="submit" loading={isLoading}>
          {t("profile.password-change")}
        </Button>
      </Stack>
    </form>
  );
};

export default SettingSection;
