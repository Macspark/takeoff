import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../const';
import {toast} from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  400: true,
  401: true,
  404: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
  );

  api.interceptors.request.use(
    (response) => response,
    (error) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};
