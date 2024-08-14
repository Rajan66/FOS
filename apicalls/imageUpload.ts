import {
    PostRequest,
  } from "@/lib/axios/client/axios";
  
  export const uploadImage = async (data: {
    data: any;
    token: string | undefined;
  }) => {
    try {
      const response = await PostRequest(
        `/api/files/upload`,
        {...data.data },
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      return response;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };