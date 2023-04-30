import {
  Button,
  FileInput,
  Grid,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";
import RichTextEditor from "~/components/widget/RichTextEditor";
import { IMAGE_ACCEPT_ATTR } from "~/constant/constant";
import { UsePostTest } from "~/hook/UseTest";
import { AddBlog } from "~/schema/Blog";

const CreateBlogPage = () => {
  const { t } = useTranslation();
  const { mutate, isLoading, isSuccess } = UsePostTest();

  const form = useForm({
    validate: zodResolver(AddBlog),
    initialValues: {
      title: "",
      description: "",
      slug: "",
      content: "",
      image: "",
      category: "",
      createdAt: new Date(),
    },
  });

  return (
    <>
      <Helmet title={String(t("seo.blog-add"))} />
      <CustomBreadcrumb>
        <Link to="/blog">{t("blog.title")}</Link>
        <Text>{t("add-blog.title")}</Text>
      </CustomBreadcrumb>
      <Paper p="md" radius="md" withBorder>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid gutter="md">
            <Grid.Col md={6}>
              <Stack>
                <TextInput
                  {...form.getInputProps("title")}
                  label={t("add-blog.post-title")}
                  description={t("add-blog.post-title-description")}
                  withAsterisk
                />
                <TextInput
                  {...form.getInputProps("description")}
                  label={t("add-blog.post-description")}
                  description={t("add-blog.post-description-description")}
                  withAsterisk
                />
                <TextInput
                  {...form.getInputProps("slug")}
                  label={t("add-blog.post-slug")}
                  description={t("add-blog.post-slug-description")}
                  withAsterisk
                />
                <RichTextEditor
                  {...form.getInputProps("content")}
                  // value={value}
                  // setValue={setValue}
                />
              </Stack>
            </Grid.Col>
            <Grid.Col md={6}>
              <Stack>
                <FileInput
                  {...form.getInputProps("image")}
                  icon={<IoCloudUploadOutline size={16} />}
                  description={t("add-blog.post-image-description")}
                  label={t("add-blog.post-image")}
                  accept={IMAGE_ACCEPT_ATTR}
                  withAsterisk
                />
                {/* <Input.Wrapper
                  {...form.getInputProps("image")}
                  label={t("add-blog.post-image")}
                  withAsterisk
                >
                  <Input.Description mb={5}>
                    {t("add-blog.post-image-description")}
                  </Input.Description>
                  <ImageUploadDropzone
                    {...form.getInputProps("image")}
                    files={files}
                    setFiles={setFiles}
                    isLoading={isLoading}
                  />
                </Input.Wrapper> */}
                <Select
                  {...form.getInputProps("category")}
                  label={t("add-blog.post-category")}
                  description={t("add-blog.post-category-description")}
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                  ]}
                  searchable
                  withAsterisk
                  allowDeselect
                />
                <Button type="submit">{t("modal.confirm")}</Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default CreateBlogPage;
