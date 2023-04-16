import {
  Group,
  Paper,
  SimpleGrid,
  Skeleton,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

const icons = {
  eye: IoEyeOutline,
};

type StatProps = {
  data: {
    title: string;
    icon: keyof typeof icons;
    value: string;
    diff: number;
  }[];
  isLoading: boolean;
};

const Stat = ({ data, isLoading }: StatProps) => {
  const theme = useMantineTheme();
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? BsArrowUpRight : BsArrowDownRight;

    return (
      <Skeleton visible={isLoading} key={stat.title}>
        <Paper withBorder p="md" radius="md">
          <Group position="apart">
            <Text size="xs" color="dimmed" fw={700}>
              {stat.title}
            </Text>
            <Icon
              color={
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[4]
              }
            />
          </Group>
          <Group align="center" position="right" spacing="xs" mt={25}>
            <Text
              dir="ltr"
              color={stat.diff > 0 ? "teal" : "red"}
              size="sm"
              weight={500}
              lh={1}
              display="flex"
              align="center"
            >
              <DiffIcon size={16} />
              <span>{stat.diff}%</span>
            </Text>
            <Text fw={700} lh={1} size={24}>
              {stat.value}
            </Text>
          </Group>
        </Paper>
      </Skeleton>
    );
  });

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "xs", cols: 1 },
        { maxWidth: "md", cols: 2 },
        { maxWidth: "lg", cols: 2 },
      ]}
    >
      {stats}
    </SimpleGrid>
  );
};

export default Stat;
