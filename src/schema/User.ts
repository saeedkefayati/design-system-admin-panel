import { t } from "i18next";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email({ message: t("login.email-error") ?? "" }),
  password: z
    .string()
    .min(6, { message: t("login.password-error") ?? "" })
    .max(12, { message: t("login.password-error") ?? "" }),
});

const ResetPasswordSchema = z.object({
  email: z.string().email({ message: t("login.email-error") ?? "" }),
});

const LockScreenSchema = z.object({
  password: z
    .string()
    .min(6, { message: t("login.password-error") ?? "" })
    .max(12, { message: t("login.password-error") ?? "" }),
});

export { LoginSchema, ResetPasswordSchema, LockScreenSchema };
