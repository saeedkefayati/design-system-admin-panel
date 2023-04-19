import { Paper } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { CardProfile } from "~/components/widget/CardProfile";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={String(t("seo.profile"))} />
      <CustomBreadcrumb>
        <Link to="/profile">{t("profile.title")}</Link>
      </CustomBreadcrumb>
      <Paper radius="md">
        <CardProfile
          image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          avatar="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          job="Front-End Developer"
          name="Saeed Kefayati"
          stats={[
            {
              value: "34K",
              label: "Followers",
            },
            {
              value: "187",
              label: "Follows",
            },
            {
              value: "1.6K",
              label: "Posts",
            },
          ]}
        />
        {/* <TabProfile /> */}
        <Outlet />
      </Paper>
    </>
  );
};

export default Profile;
