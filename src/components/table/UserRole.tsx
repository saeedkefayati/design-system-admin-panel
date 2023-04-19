import {
  Avatar,
  Badge,
  Button,
  createStyles,
  Group,
  Paper,
  rem,
  ScrollArea,
  Select,
  Space,
  Switch,
  Table,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

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

interface UserRoleTableProps {
  data: {
    name: string;
    avatar: string;
    username: string;
    title: string;
    role: string;
    status: "active" | "de-active" | "pending";
  }[];
}

export function UserRoleTable({ data }: UserRoleTableProps) {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const [scrolled, setScrolled] = useState(false);

  const editModal = () =>
    openConfirmModal({
      title: t("modal.title.edit-role"),
      children: (
        <>
          <Select
            label="انتخاب نقش"
            data={[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
              { value: "writer", label: "Writer" },
            ]}
          />
          <Space h="md" />
          <Text>وضعیت نقش</Text>
          <Switch
            onLabel={<IoCheckmarkOutline size={16} color={theme.white} />}
            offLabel={<IoCloseOutline size={16} color={theme.colors.red[5]} />}
            color="green"
            size="md"
          />
          <Space h="md" />
        </>
      ),
      onCancel() {
        console.log("cancel");
      },
      onConfirm() {
        console.log("confirm");
      },
    });

  const statusFunc = (status: "active" | "de-active" | "pending") => {
    return (
      <>
        {status === "active" && (
          <Badge variant="filled" color="green">
            active
          </Badge>
        )}
        {status === "de-active" && (
          <Badge variant="filled" color="red">
            de-active
          </Badge>
        )}
        {status === "pending" && (
          <Badge variant="filled" color="yellow">
            pending
          </Badge>
        )}
      </>
    );
  };

  const rows = data.map((row) => (
    <tr key={crypto.randomUUID()}>
      <td>
        <Group>
          <Avatar src={row.avatar} alt={row.title} />
          {row.name}
        </Group>
      </td>
      <td>{row.username}</td>
      <td>{row.title}</td>
      <td>{row.role}</td>
      <td>{statusFunc(row.status)}</td>
      <td>
        <Button variant="outline" color="gray" onClick={editModal}>
          Edit
        </Button>
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
              <th>UserName</th>
              <th>Title</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
