import { Grid, Skeleton, Space } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CardStats } from "~/components/widget/CardStats";
import CheckDevice from "~/components/widget/CheckDevice";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";
import MapChart from "~/components/map/MapChart";
import ProgressCard from "~/components/widget/ProgressCard";
import Stat from "~/components/widget/Stat";
import StatsRingProgress from "~/components/widget/StatsRingProgress";
import { UseTest } from "~/hook/UseTest";

const Dashboard = () => {
  const { isLoading } = UseTest();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={String(t("seo.dashboard"))} />
      <CustomBreadcrumb>
        <Link to="/">{t("home.title")}</Link>
      </CustomBreadcrumb>
      <Stat
        isLoading={isLoading}
        data={[
          {
            title: "بازدید یک روز اخیر",
            icon: "eye",
            value: "13,456",
            diff: 34,
          },
          { title: "بازدید یک هفته اخیر", icon: "eye", value: "745", diff: 18 },
          { title: "بازدید یک ماه اخیر", icon: "eye", value: "188", diff: -30 },
          { title: "بازدید یک سال اخیر", icon: "eye", value: "194", diff: -46 },
        ]}
      />
      <Space h="lg" />
      <StatsRingProgress
        isLoading={isLoading}
        data={[
          {
            label: "Page views",
            stats: "456,578",
            progress: 65,
            color: "teal",
            icon: "up",
          },
          {
            label: "New users",
            stats: "2,550",
            progress: 72,
            color: "blue",
            icon: "up",
          },
          {
            label: "Orders",
            stats: "4,735",
            progress: 52,
            color: "red",
            icon: "down",
          },
        ]}
      />
      <Space h="lg" />
      <Grid gutter="lg">
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <CheckDevice />
            <Space h="lg" />
            <ProgressCard title="Monthly" value={42.54} max={100} />
            <Space h="lg" />
          </Skeleton>
          <Skeleton visible={isLoading}>
            <CardStats
              title="Project tasks"
              completed={1887}
              total={2334}
              stats={[
                {
                  value: 447,
                  label: "Remaining",
                },
                {
                  value: 76,
                  label: "In progress",
                },
              ]}
            />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading} h="100%">
            <MapChart latitude={32} longitude={53} country="IRAN" />
            {/* <MapChart latitude={33} longitude={44} />
            <MapChart latitude={42.83} longitude={12.83} /> */}
          </Skeleton>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Dashboard;
