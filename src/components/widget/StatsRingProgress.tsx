import {
  Center,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Skeleton,
  Text,
} from "@mantine/core";
import { IoTrendingDownOutline, IoTrendingUpOutline } from "react-icons/io5";

interface StatsRingProps {
  data: {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: "up" | "down";
  }[];
  isLoading: boolean;
}

const icons = {
  up: IoTrendingUpOutline,
  down: IoTrendingDownOutline,
};

const StatsRingProgress = ({ data, isLoading }: StatsRingProps) => {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Skeleton visible={isLoading} key={crypto.randomUUID()}>
        <Paper withBorder radius="md" p="xs">
          <Group>
            <RingProgress
              size={80}
              roundCaps
              thickness={8}
              sections={[{ value: stat.progress, color: stat.color }]}
              label={
                <Center>
                  <Icon />
                </Center>
              }
            />
            <div>
              <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                {stat.label}
              </Text>
              <Text weight={700} size="xl">
                {stat.stats}
              </Text>
            </div>
          </Group>
        </Paper>
      </Skeleton>
    );
  });

  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
};

export default StatsRingProgress;
