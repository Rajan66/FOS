import {
  getAllRestaurants,
  getRestUser,
  getRestaurantDetail,
} from "@/apicalls/restaurant";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllRestaurants = (page: number | 1) => {
  const { data, isPending } = useQuery<PaginatedRestaurantsData>({
    queryKey: ["restaurants", page],
    queryFn: () => getAllRestaurants(page),
    placeholderData: keepPreviousData,
  });
  return { data, isPending };
};

export const useGetRestaurant = (id: number) => {
  const { data, isPending } = useQuery<Restaurant>({
    queryKey: ["restaurant", id],
    queryFn: () => getRestaurantDetail(id),
  });

  return { data, isPending };
};

export const useGetRestaurantUser = (
  id: number | undefined,
  token: string | undefined
) => {
  const { data, isPending } = useQuery<Restaurant>({
    queryKey: ["restUser", id],
    queryFn: () => getRestUser({ id, token }),
  });

  return { data, isPending };
};
