import {
  Flex,
  Grid,
  Pagination,
  Select,
  Skeleton,
  Space,
  useMantineTheme,
} from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { IoChevronDownOutline, IoFunnelOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CardBlog from "~/components/widget/CardBlog";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";
import { UseTest } from "~/hook/UseTest";

const BlogPage = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { isLoading } = UseTest();

  return (
    <>
      <Helmet title={String(t("seo.blog"))} />
      <Flex gap="lg" align="center" justify="space-between" wrap="wrap">
        <CustomBreadcrumb style={{ flex: 1 }}>
          <Link to="/blog">{t("blog.title")}</Link>
        </CustomBreadcrumb>
        <Select
          h="100%"
          fz="xs"
          icon={<IoFunnelOutline size={16} />}
          rightSection={
            <IoChevronDownOutline color={theme.colors.gray[6]} size={16} />
          }
          style={{ flexBasis: 150 }}
          size="md"
          defaultValue="asc"
          data={[
            { value: "asc", label: String(t("filter.asc")) },
            { value: "desc", label: String(t("filter.desc")) },
          ]}
          searchable
          allowDeselect
        />
      </Flex>
      <Space h="md" />
      <>
        <Grid gutter="md">
          {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
            <Grid.Col sm={6} md={6} lg={4} key={index}>
              <Skeleton visible={isLoading}>
                <Link to={`/blog/norway-fjord-adventures`}>
                  <CardBlog
                    title="Norway Fjord Adventures"
                    date="4/19/2023, 4:20:18 PM"
                    description="With Fjord Tours you can explore more of the magical fjord landscapes
                    with tours and activities on and around the fjords of Norway"
                    src="https://api-prod-minimal-v4.vercel.app/assets/images/products/product_21.jpg"
                    avatar="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                  />
                </Link>
              </Skeleton>
            </Grid.Col>
          ))}
        </Grid>
        <Space h="xl" />
        <Pagination
          position="center"
          total={10}
          color="teal"
          radius="md"
          withEdges
        />
      </>
    </>
  );
};

export default BlogPage;
