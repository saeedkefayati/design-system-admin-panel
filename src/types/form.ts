import { z } from "zod";
import { AddBlogSchema, EditBlogSchema } from "~/schema/Blog";
import {
  ProfileInformationSchema,
  ProfilePasswordSchema,
} from "~/schema/Profile";
import {
  LockScreenSchema,
  LoginSchema,
  ResetPasswordSchema,
} from "~/schema/User";

// blog
export type AddBlogInput = z.infer<typeof AddBlogSchema>;
export type EditBlogInput = z.infer<typeof EditBlogSchema>;

// profile
export type ProfilePasswordInput = z.infer<typeof ProfilePasswordSchema>;
export type ProfileInformationInput = z.infer<typeof ProfileInformationSchema>;

// user
export type LoginInput = z.infer<typeof LoginSchema>;
export type ResetPasswordInput = z.infer<typeof ResetPasswordSchema>;
export type LockScreenInput = z.infer<typeof LockScreenSchema>;
