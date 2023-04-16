import { Card, Group, Title, useMantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

type MapChartProps = {
  country?: string;
  latitude: number;
  longitude: number;
};

const MapChart = ({ country, latitude, longitude }: MapChartProps) => {
  const { t } = useTranslation();
  const theme = useMantineTheme();

  return (
    <Card
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      })}
      padding="xl"
      radius="md"
      withBorder
    >
      <Group position="apart" mb="md">
        <Title order={6}>{t("home.location")}</Title>
      </Group>
      {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {country}
      </Text> */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 400, center: [longitude, latitude] }}
        style={{
          minHeight: "480px",
          height: "100%",
          width: "100%",
          borderRadius: theme.radius.sm,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={theme.colors.blue[5]}
                fillOpacity={0.6}
                stroke={
                  theme.colorScheme === "dark" ? theme.white : theme.black
                }
                strokeWidth={1}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[longitude, latitude]}>
          {/* <circle cx="0" cy="0" r="6" fill={theme.colors.red[5]}></circle> */}
          <svg
            aria-label={country}
            height={100}
            width={100}
            x={-50}
            y={-50}
            fill={theme.colorScheme === "dark" ? theme.white : theme.black}
          >
            <text x={50} y={25} textAnchor="middle" fontSize="1.5rem">
              {country}
            </text>
            <circle
              stroke={theme.colorScheme === "dark" ? theme.white : theme.black}
              strokeWidth={2}
              strokeOpacity={1}
              cx={50}
              cy={50}
              r={8}
            />
            <circle
              stroke={theme.colorScheme === "dark" ? theme.white : theme.black}
              strokeWidth={2}
              strokeOpacity={1}
              fill={theme.colorScheme === "dark" ? theme.white : theme.black}
              fillOpacity={0}
              className="pulse"
              cx={50}
              cy={50}
              r={12}
            />
          </svg>
        </Marker>
      </ComposableMap>
    </Card>
  );
};

export default MapChart;
