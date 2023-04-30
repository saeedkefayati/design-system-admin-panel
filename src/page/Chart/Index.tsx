import { Grid, Skeleton } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AreaChart from "~/components/chart/Area";
import DoughnutChart from "~/components/chart/Doughnut";
import HorizontalBar from "~/components/chart/HorizontalBar";
import LineChart from "~/components/chart/Line";
import PieChart from "~/components/chart/Pie";
import VerticalBar from "~/components/chart/VerticalBar";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";
import { UseTest } from "~/hook/UseTest";

const ChartPage = () => {
  const { t } = useTranslation();
  const { isLoading } = UseTest();

  return (
    <>
      <Helmet title={String(t("seo.chart"))} />
      <CustomBreadcrumb>
        <Link to="/chart">{t("chart.title")}</Link>
      </CustomBreadcrumb>
      <Grid gutter="md">
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <LineChart />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <AreaChart />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <VerticalBar />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <HorizontalBar />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <PieChart />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <DoughnutChart />
          </Skeleton>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ChartPage;
