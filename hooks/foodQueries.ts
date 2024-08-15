import { getAllMenuFoods, getFoodDetail } from "@/apicalls/food";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllMenuFoods = (
  id: number | undefined,
  token: string | undefined,
  pageParam: number | 1
) => {
  const { data, isPending } = useQuery<PaginatedUsersData>({
    queryKey: ["foods", pageParam],
    queryFn: () => getAllMenuFoods(id, token, pageParam),
    placeholderData: keepPreviousData,
  });
  return { data, isPending };
};

export const useGetFoodDetail = (id: number, token: string | undefined) => {
  const { data, isPending } = useQuery<UserDetails>({
    queryKey: ["food", id],
    queryFn: () => getFoodDetail(id, token),
  });

  return { data, isPending };
};
