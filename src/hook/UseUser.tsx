import { useQuery } from "@tanstack/react-query";
import { getUsers } from "~/api/user";
import { BlogParam } from "~/types/api";

const UseUsers = ({ ...props }: BlogParam) => {
  return useQuery({
    queryKey: ["users", { ...props }],
    queryFn: () => getUsers({ ...props }),
    keepPreviousData: true,
  });
};

export { UseUsers };
