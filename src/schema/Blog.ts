import { t } from "i18next";
import { z } from "zod";

const Blog = z.object({
  title: z.string().min(1, { message: t("form.required") ?? "" }),
  description: z.string().min(1, { message: t("form.required") ?? "" }),
  slug: z.string().min(1, { message: t("form.required") ?? "" }),
  content: z.string().min(1, { message: t("form.required") ?? "" }),
  image: z.string().min(1, { message: t("form.required") ?? "" }),
  category: z.string().min(1, { message: t("form.required") ?? "" }),
});

export const AddBlog = Blog.extend({
  createdAt: z.date(),
});

export const EditBlog = Blog.extend({
  editedAt: z.date(),
});
