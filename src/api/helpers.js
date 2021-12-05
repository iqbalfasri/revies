import axios from "axios";
import { API_BASE_URL, API_KEY } from "./constants";

export const API = () => {
  const requestHeaders = {
    accept: "application/json",
  };

  const cancelSource = axios.CancelToken.source();
  const request = axios.create({
    baseURL: API_BASE_URL,
    params: {
      api_key: API_KEY,
      region: "ID",
    },
    timeout: 60000, // 1 menute to cancel request
    headers: requestHeaders,
    cancelToken: cancelSource.token,
  });

  return { request, cancelSource };
};
