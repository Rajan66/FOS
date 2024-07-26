import {
    DeleteRequest,
    GetRequest,
    PostRequest,
    PutRequest,
  } from "@/lib/axios/axios";
  
  export const createFood = async (data: any, token: string) => {
    try {
      const response = await PostRequest(
        `/api/foods`,
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
  
  export const getAllFoods = async () => {
    try {
      const response = await GetRequest(
        `/api/foods`,
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
  
  export const getFoodDetail = async (id: number) => {
    try {
      const response = await GetRequest(
        `/api/foods/${id}`,
        {
          foodId: id,
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
  
  export const updateFood = async (
    id: number,
    data: any,
    token: string
  ) => {
    try {
      const response = await PutRequest(
        `/api/foods/${id}`,
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
  
  export const deleteFood = async (id: number) => {
    try {
      const response = await DeleteRequest(`/api/foods/${id}`, {});
      return response.data;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };
  