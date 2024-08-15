import { getMenuDetail, getRestaurantMenus } from "@/apicalls/menu";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetRestaurantMenus = (
  restaurantId: number,
  token: string | undefined,
  page: number | 1
) => {
  const { data, isPending } = useQuery<PaginatedMenusData>({
    queryKey: ["menus", page],
    queryFn: () =>
      getRestaurantMenus(restaurantId, token, page).then(
        (response) => response.data
      ),
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
