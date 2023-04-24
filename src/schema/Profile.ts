import { t } from "i18next";
import Zod, { string } from "zod";

const ProfilePasswordSchema = Zod.object({
  password: string().min(6, { message: t("profile.password-length") ?? "" }),
  confirmPassword: string().min(6, {
    message: t("profile.password-length") ?? "",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: t("profile.password-error") ?? "",
  path: ["confirmPassword"],
});

const ProfileInformationSchema = Zod.object({
  username: string().min(8, { message: t("profile.username-length") ?? "" }),
  email: string().email({
    message: t("profile.email-error") ?? "",
  }),
  phone: string()
    .min(11, {
      message: t("profile.phone-length") ?? "",
    })
    .max(11, {
      message: t("profile.phone-length") ?? "",
    }),
});

export { ProfilePasswordSchema, ProfileInformationSchema };
