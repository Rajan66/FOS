import { getAllRestaurants, getRestaurantDetail } from "@/apicalls/restaurant";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllRestaurants = (page: number) => {
  const { data, isPending } = useQuery<PaginatedRestaurantsData>({
    queryKey: ["restaurants"],
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
