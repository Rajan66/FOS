import { GetRequest } from "@/lib/axios/axios";

export const getAllRestaurants = async () => {
  try {
    const response = await GetRequest(
      `/api/restaurants`,
      {
        data: undefined,
      },
      {
        headers: {},
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getRestaurantDetail = async (id: number) => {
  try {
    const response = await GetRequest(
      `/api/restaurants/${id}`,
      {
        restaurantId: id,
      },
      {
        headers: {},
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
