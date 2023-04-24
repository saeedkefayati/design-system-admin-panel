import { Grid, Skeleton } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { CardProfile } from "~/components/widget/CardProfile";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";
import { UseTest } from "~/hook/UseTest";

const Profile = () => {
  const { t } = useTranslation();
  const { isLoading } = UseTest();

  return (
    <>
      <Helmet title={String(t("seo.profile"))} />
      <CustomBreadcrumb>
        <Link to="/profile">{t("profile.title")}</Link>
      </CustomBreadcrumb>
      <Grid gutter="md">
        <Grid.Col order={1} orderSm={0} sm={6} lg={8}>
          <Skeleton visible={isLoading}>
            <Outlet />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6} lg={4}>
          <Skeleton visible={isLoading}>
            <CardProfile
              image="https://source.unsplash.com/random/640x360/?iran"
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
          </Skeleton>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Profile;
