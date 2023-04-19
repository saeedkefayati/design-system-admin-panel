import {
  ActionIcon,
  createStyles,
  Group,
  Paper,
  rem,
  ScrollArea,
  Table,
} from "@mantine/core";
import { useState } from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    zIndex: 1,
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.md,
  },
}));

interface StickyHeaderTableProps {
  data: { name: string; email: string; company: string }[];
}

export function StickyHeaderTable({ data }: StickyHeaderTableProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={crypto.randomUUID()}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.company}</td>
      <td>
        <Group>
          <ActionIcon color="orange" variant="light">
            <IoCreateOutline size={16} />
          </ActionIcon>
          <ActionIcon color="red" variant="light">
            <IoTrashOutline size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Paper withBorder p="md" radius="md">
      <ScrollArea
        h={300}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table miw={700} striped highlightOnHover withBorder withColumnBorders>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
