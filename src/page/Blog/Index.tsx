import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MantineTable from "~/components/table/MantineTable";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={String(t("seo.blog"))} />
      <CustomBreadcrumb>
        <Link to="/blog">{t("blog.title")}</Link>
      </CustomBreadcrumb>
      {/* <Select
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
          allowDeselect
        /> */}
      <MantineTable />
    </>
  );
};

export default BlogPage;
