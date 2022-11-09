/* eslint-disable */
import axios, {
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export class Axios {
  /** @type {{request: AxiosInterceptorManager<AxiosRequestConfig>, response: AxiosInterceptorManager<AxiosResponse>}} interceptors */
  interceptors;

  /**
   *
   * @param {AxiosRequestConfig} config
   * @returns
   */
  constructor(config) {
    return axios.create(config);
  }
}
