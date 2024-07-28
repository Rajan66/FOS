import {
  DeleteRequest,
  GetRequest,
  PostRequest,
  PutRequest,
} from "@/lib/axios/client/axios";

export const createRestaurant = async (data: any, token: string) => {
  try {
    const response = await PostRequest(
      `/api/restaurants`,
      { data: data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getAllRestaurants = async () => {
  try {
    const response = await GetRequest(
      `/api/restaurants`,
      {},
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

export const updateRestaurant = async (
  id: number,
  data: any,
  token: string
) => {
  try {
    const response = await PutRequest(
      `/api/restaurants/${id}`,
      { data: data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const deleteRestaurant = async (id: number) => {
  try {
    const response = await DeleteRequest(`/api/restaurants/${id}`, {});
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
