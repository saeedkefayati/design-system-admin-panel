import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTest, postTest } from "~/api/test";

const UseTest = () => {
  return useQuery({
    queryKey: ["test"],
    queryFn: () => getTest(),
    keepPreviousData: true,
  });
};

const UsePostTest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTest,
    onSuccess: (data: any) => {
      queryClient.setQueryData(["login"], data);
    },
  });
};

export { UseTest, UsePostTest };
