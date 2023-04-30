import { t } from "i18next";
import { z } from "zod";

const ProfilePasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: t("profile.password-length") ?? "" }),
    confirmPassword: z.string().min(6, {
      message: t("profile.password-length") ?? "",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: t("profile.password-error") ?? "",
    path: ["confirmPassword"],
  });

const ProfileInformationSchema = z.object({
  username: z.string().min(8, { message: t("profile.username-length") ?? "" }),
  email: z.string().email({
    message: t("profile.email-error") ?? "",
  }),
  phone: z
    .string()
    .min(11, {
      message: t("profile.phone-length") ?? "",
    })
    .max(11, {
      message: t("profile.phone-length") ?? "",
    }),
});

export { ProfilePasswordSchema, ProfileInformationSchema };
