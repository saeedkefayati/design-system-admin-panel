import { Breadcrumbs, Paper, Space } from "@mantine/core";
import { PropsWithChildren } from "react";

const CustomBreadcrumb = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Paper withBorder p="md" radius="md">
        <Breadcrumbs>{children}</Breadcrumbs>
      </Paper>
      <Space h="md" />
    </>
  );
};
export default CustomBreadcrumb;
