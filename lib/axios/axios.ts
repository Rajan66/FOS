import axios from "./interceptor";

export function PostRequest(url: string, data: any, config: any) {
  return axios.post(url, data, config);
}

export function PutRequest(url: string, data: any, config: any) {
  return axios.put(url, data, config);
}

export function DeleteRequest(url: string, data: any) {
  return axios.delete(url, data);
}

export function GetRequest(url: string, data: any, config: any) {
  config.params = data;
  return axios.get(url, config);
}
