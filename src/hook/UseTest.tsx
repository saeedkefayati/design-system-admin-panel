import { useQuery } from "@tanstack/react-query";
import { getTest } from "~/api/test";

const UseTest = () => {
  return useQuery({
    queryKey: ["test"],
    queryFn: () => getTest(),
    keepPreviousData: true,
  });
};

export { UseTest };
