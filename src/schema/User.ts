import { t } from "i18next";
import { z } from "zod";

export const Login = z.object({
  email: z.string().email({ message: t("login.email-error") ?? "" }),
  password: z
    .string()
    .min(6, { message: t("login.password-error") ?? "" })
    .max(12, { message: t("login.password-error") ?? "" }),
});

export const ResetPassword = z.object({
  email: z.string().email({ message: t("login.email-error") ?? "" }),
});

export const LockScreen = z.object({
  password: z
    .string()
    .min(6, { message: t("login.password-error") ?? "" })
    .max(12, { message: t("login.password-error") ?? "" }),
});
