import {
  Button,
  FileInput,
  Grid,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";
import RichTextEditor from "~/components/widget/RichTextEditor";
import { IMAGE_ACCEPT_ATTR } from "~/constant/constant";
import { UsePostTest } from "~/hook/UseTest";
import { EditBlog } from "~/schema/Blog";

const EditBlogPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { mutate, isLoading, isSuccess } = UsePostTest();

  const form = useForm({
    validate: zodResolver(EditBlog),
    initialValues: {
      title: "Norway Fjord Adventures",
      description:
        "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
      slug: "norway-fjord-adventures",
      content:
        '<p>dsadasfdfadfaf</p><p>asdasdashgasfasf</p><p>بشستنشسلبشسنلبشسنب</p><p>asfasfasfشبشسبش</p><p>بشسfsa</p><p>ffaُبشسب</p><p class="ql-indent-1">بشسبسشبشب</p><p>بشسببشسب</p><blockquote>بسشبشسبشسببش</blockquote><ul><li>بشسبشسب</li><li><br></li></ul>',
      image: "",
      category: "react",
      editedAt: new Date(),
    },
  });

  return (
    <>
      <Helmet title={String(t("seo.blog-edit"))} />
      <CustomBreadcrumb>
        <Link to="/blog">{t("blog.title")}</Link>
        <Text>{slug}</Text>
      </CustomBreadcrumb>
      <Paper p="md" radius="md" withBorder>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid gutter="md">
            <Grid.Col md={6}>
              <Stack>
                <TextInput
                  {...form.getInputProps("title")}
                  label={t("edit-blog.post-title")}
                  description={t("edit-blog.post-title-description")}
                  withAsterisk
                />
                <Textarea
                  {...form.getInputProps("description")}
                  label={t("edit-blog.post-description")}
                  description={t("edit-blog.post-description-description")}
                  autosize
                  minRows={2}
                  maxLength={200}
                  withAsterisk
                />
                {/* <TextInput
                label={t("edit-blog.post-description")}
                description={t("edit-blog.post-description-description")}
                defaultValue="With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
                withAsterisk
              /> */}
                <TextInput
                  {...form.getInputProps("slug")}
                  label={t("edit-blog.post-slug")}
                  description={t("edit-blog.post-slug-description")}
                  withAsterisk
                />
                <RichTextEditor {...form.getInputProps("content")} />
              </Stack>
            </Grid.Col>
            <Grid.Col md={6}>
              <Stack>
                <FileInput
                  {...form.getInputProps("image")}
                  onChange={(e: any) => {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(e.target.files[0]);
                    fileReader.addEventListener("load", () => {});
                    console.log(fileReader);
                    console.log(e);
                  }}
                  icon={<IoCloudUploadOutline size={16} />}
                  description={t("edit-blog.post-image-description")}
                  label={t("edit-blog.post-image")}
                  accept={IMAGE_ACCEPT_ATTR}
                  withAsterisk
                />
                {/* <Input.Wrapper label={t("edit-blog.post-image")} withAsterisk>
                <Input.Description mb={5}>
                  {t("edit-blog.post-image-description")}
                </Input.Description>
                {image.length > 0 ? (
                  <Box pos="relative">
                    <Image
                      h={300}
                      src={image}
                      radius="sm"
                      alt="Norway Fjord Adventures"
                      withPlaceholder
                    />
                    <Box pos="absolute" top={16} right={16}>
                      <CloseButton
                        title="remove image"
                        onClick={removeImage}
                        iconSize={24}
                        size="lg"
                      />
                    </Box>
                  </Box>
                ) : (
                  <ImageUploadDropzone
                    files={files}
                    setFiles={setFiles}
                    isLoading={isLoading}
                  />
                )}
              </Input.Wrapper> */}
                <Select
                  {...form.getInputProps("category")}
                  label={t("edit-blog.post-category")}
                  description={t("edit-blog.post-category-description")}
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

export default EditBlogPage;
