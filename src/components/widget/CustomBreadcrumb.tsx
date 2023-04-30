import { Breadcrumbs, Paper, Space } from "@mantine/core";
import { CSSProperties } from "react";
import { WithChildren } from "~/types/types";

type CustomBreadcrumbProps = WithChildren<{
  style?: CSSProperties;
}>;

const CustomBreadcrumb = ({ children, style }: CustomBreadcrumbProps) => {
  return (
    <>
      <Paper withBorder p="md" radius="md" style={style}>
        <Breadcrumbs>{children}</Breadcrumbs>
      </Paper>
      <Space h="md" />
    </>
  );
};
export default CustomBreadcrumb;
