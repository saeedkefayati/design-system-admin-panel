import { ActionIcon, Button, Flex, Pagination } from "@mantine/core";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { MRT_Localization_EN } from "mantine-react-table/locales/en";
import { MRT_Localization_FA } from "mantine-react-table/locales/fa";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { TbRefresh, TbSortAscending, TbSortDescending } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { UseUsers } from "~/hook/UseUser";
import { useSettingContext } from "~/provider/Context";
import { BlogUser } from "~/types/api";

const MantineTable = () => {
  const navigate = useNavigate();
  const { dir } = useSettingContext();
  const { t } = useTranslation();
  const [sorting, setSorting] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState();
  const [paginationIndex, setPaginationIndex] = useState(1);
  const { data, isError, isFetching, isLoading, refetch } = UseUsers({
    limit: 6,
    page: paginationIndex,
    sort: sorting,
    q: search,
  });

  const columns = useMemo<MRT_ColumnDef<BlogUser>[]>(
    () => [
      {
        accessorKey: "name.firstname",
        header: "First Name",
      },
      {
        accessorKey: "name.lastname",
        header: "Last Name",
      },
      {
        accessorKey: "address.city",
        header: "City",
      },
      {
        accessorKey: "address.street",
        header: "Address",
      },
    ],
    []
  );

  return (
    <>
      <MantineReactTable
        localization={dir === "rtl" ? MRT_Localization_FA : MRT_Localization_EN}
        // mantineTableProps={{ withColumnBorders: true }}
        mantinePaperProps={{ radius: "md", shadow: "none" }}
        mantineTopToolbarProps={{
          style: { borderRadius: "inherit", alignItems: "center" },
        }}
        mantineToolbarAlertBannerProps={
          isError
            ? {
                color: "red",
                children: t("api.failed"),
                display: "flex",
                style: {
                  placeContent: "center",
                },
              }
            : undefined
        }
        columns={columns}
        enableRowActions
        renderRowActions={({ row }) => (
          <Button
            key={row.id}
            component={Link}
            to={`/blog/${row.original.username}`}
          >
            {t("edit-blog.title")}
          </Button>
        )}
        positionActionsColumn="last"
        data={data ?? []}
        initialState={{ showGlobalFilter: true }}
        enableFilters={false}
        enableGlobalFilter
        enablePagination={false}
        enableFullScreenToggle={false}
        enableSorting={false}
        // enableHiding={false}
        enableRowNumbers
        enableColumnOrdering
        // enablePinning
        // enableStickyHeader
        onGlobalFilterChange={setSearch}
        enableFilterMatchHighlighting
        // enableGlobalFilterModes
        // enableGlobalFilterRankedResults
        // enableStickyFooter
        // manualFiltering
        // manualPagination
        // manualSorting
        // onPaginationChange={setPagination}
        // onSortingChange={setSorting}
        renderTopToolbarCustomActions={() => (
          <Flex
            gap={16}
            style={{ alignSelf: "center", flex: 1 }}
            justify="space-between"
          >
            <Button variant="outline" component={Link} to="/blog/create">
              {t("add-blog.title")}
            </Button>
            <Flex>
              <ActionIcon size="lg" onClick={() => refetch()}>
                <TbRefresh />
              </ActionIcon>
              {sorting === "asc" ? (
                <ActionIcon size="lg" onClick={() => setSorting("desc")}>
                  <TbSortDescending />
                </ActionIcon>
              ) : (
                <ActionIcon size="lg" onClick={() => setSorting("asc")}>
                  <TbSortAscending />
                </ActionIcon>
              )}
            </Flex>
          </Flex>
        )}
        rowCount={6}
        pageCount={6}
        state={{
          isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching,
        }}
        renderBottomToolbar={() => (
          <Pagination
            position="center"
            my={16}
            total={data?.length ?? 0}
            siblings={2}
            value={paginationIndex}
            onChange={setPaginationIndex}
          />
        )}
      />
    </>
  );
};

export default MantineTable;

//       onColumnFiltersChange={setColumnFilters}
//       onGlobalFilterChange={setGlobalFilter}
//       onPaginationChange={setPagination}
//       onSortingChange={setSorting}
//       state={{
//         showProgressBars: isFetching,
//         showAlertBanner: isError,
//         pagination,
//         columnFilters,
//         globalFilter,
//         isLoading,
//         sorting,
//       }}
//       enableFullScreenToggle={false}
//       enableRowNumbers
//       enableStickyHeader
//       enableStickyFooter
//       manualFiltering
//       manualPagination
//       manualSorting
//     />
//   );
// };
