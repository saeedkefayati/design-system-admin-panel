import { Grid, Skeleton } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AreaChart from "~/components/chart/Area";
import DoughnutChart from "~/components/chart/Doughnut";
import HorizontalBar from "~/components/chart/HorizontalBar";
import LineChart from "~/components/chart/Line";
import PieChart from "~/components/chart/Pie";
import VerticalBar from "~/components/chart/VerticalBar";
import CustomBreadcrumb from "~/components/CustomBreadcrumb";
import { UseTest } from "~/hook/UseTest";

const Chart = () => {
  const { t } = useTranslation();
  const { isLoading } = UseTest();

  return (
    <>
      <CustomBreadcrumb>
        <Link to="/">{t("chart.title")}</Link>
      </CustomBreadcrumb>
      <Grid gutter="xl">
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

export default Chart;
