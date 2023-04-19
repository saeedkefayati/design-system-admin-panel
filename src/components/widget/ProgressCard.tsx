import { Card, Progress, Text } from "@mantine/core";

type ProgressCardProps = {
  title: string;
  value: number;
  max: number;
};

const ProgressCard = ({ title, value, max }: ProgressCardProps) => {
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {title}
      </Text>
      <Text fz="lg" fw={500} mb="sm">
        ${value} / ${max}
      </Text>
      <Progress value={value} label={`${value}%`} size="xl" radius="sm" />
    </Card>
  );
};

export default ProgressCard;
