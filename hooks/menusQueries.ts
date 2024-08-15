import { getMenuDetail, getRestaurantMenus } from "@/apicalls/menu";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetRestaurantMenus = (
  restaurantId: number,
  token: string | undefined,
  page: number | 1
) => {
  const { data, isPending } = useQuery<PaginatedMenusData>({
    queryKey: ["menus", page],
    queryFn: async () => {
      const response = await getRestaurantMenus(page, restaurantId, token);
      return response.data;
    },
    placeholderData: keepPreviousData,
  });
  return { data, isPending };
};

export const useGetRestaurant = (id: number, token: string | undefined) => {
  const { data, isPending } = useQuery<Menu>({
    queryKey: ["menu", id],
    queryFn: () => getMenuDetail(id, token),
  });

  return { data, isPending };
};
