import { Grid, Skeleton, Space } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CheckDevice from "~/components/CheckDevice";
import CustomBreadcrumb from "~/components/CustomBreadcrumb";
import MapChart from "~/components/MapChart";
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
      {/* <Stat
        isLoading={isLoading}
        data={[
          { title: 'بازدید یک روز اخیر', icon: 'eye', value: '13,456', diff: 34 },
          { title: 'بازدید یک هفته اخیر', icon: 'eye', value: '745', diff: 18 },
          { title: 'بازدید یک ماه اخیر', icon: 'eye', value: '188', diff: -30 },
          { title: 'بازدید یک سال اخیر', icon: 'eye', value: '188', diff: -30 },
        ]}
      /> */}
      <Grid gutter="xl">
        <Grid.Col sm={6}>
          <Skeleton visible={isLoading}>
            <CheckDevice />
          </Skeleton>
          <Space h="md" />
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
