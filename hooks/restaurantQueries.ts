import { getAllRestaurants, getRestaurantDetail } from "@/apicalls/restaurants";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAllRestaurants = () => {
  const { data, isPending } = useQuery<PaginatedRestaurantsData>({
    queryKey: ["restaurants"],
    queryFn: () => getAllRestaurants(),
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
