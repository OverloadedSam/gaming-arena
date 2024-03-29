import axios, { AxiosRequestConfig } from 'axios';

export interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class ApiClient<T> {
  constructor(public readonly endpoint: string) {}

  getAll = async (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = async (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
