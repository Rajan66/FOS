import {
  DeleteRequest,
  GetRequest,
  PostRequest,
  PutRequest,
} from "@/lib/axios/client/axios";

export const registerUser = async (data: any) => {
  try {
    const response = await PostRequest("/api/auth/register", data, {});
    return response;
  } catch (error: any) {
    return error;
  }
};

export const getAllUsers = async (pageParam = 1, token: string | undefined) => {
  try {
    const response = await GetRequest(
      `/api/users`,
      {
        page: pageParam,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getUserDetails = async (id: number, token: string | undefined) => {
  try {
    const response = await GetRequest(
      `/api/users/${id}`,
      {},
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error: any) {
    return error;
  }
};

type UpdateProps = {
  data: any;
  id: number;
  token: string | undefined;
};

export const updateUserDetails = async (params: UpdateProps) => {
  try {
    const response = await PutRequest(`/api/users/${params.id}`, params.data, {
      headers: { authorization: `Bearer ${params.token}` },
    });
    return response;
  } catch (error: any) {
    return error;
  }
};

type ChangePassProps = {
  data: any;
  token: string | undefined;
};

export const changePassword = async (params: ChangePassProps) => {
  try {
    const response = await PostRequest(
      `/api/user/changepassword`,
      params.data,
      {
        headers: { authorization: `Bearer ${params.token}` },
      }
    );
    return response;
  } catch (error: any) {
    return error;
  }
};

export const deleteUser = async (data: {
  id: number;
  token: string | undefined;
}) => {
  try {
    const response = await DeleteRequest(`/api/users/${data.id}`, {
      headers: { authorization: `Bearer ${data.token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};