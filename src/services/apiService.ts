import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';
import URLS, { API_KEY } from '../constants/urls';

import STATUS_CODE from '../constants/http';

import {
  ApiDataProcessor,
  IFetchData,
  IRequestDataParams,
  IResponse,
} from '../types/api';

const isStatusSuccessful = (status: number): boolean => (
  status >= STATUS_CODE.OK && status <= STATUS_CODE.NOT_MODIFIED
);

const getUrl = (url: string): string => `${url}&apikey=${API_KEY}`;

const getProcessed = (
  data: any, processData?: ApiDataProcessor,
): any => (processData ? processData(data) : data);

const request = async <T, U = T>(
  method: Method, { url, processData }: IRequestDataParams,
): Promise<IFetchData<U>> => {
  let response;

  const api = axios.create({
    baseURL: URLS.BASE_URL,
  }) as AxiosInstance;

  try {
    response = await (
      // @ts-ignore
      api[method]<IResponse<T>>(getUrl(url)) as Promise<AxiosResponse<IResponse<T>>>
    );

    if (response.status === STATUS_CODE.NO_CONTENT) {
      return {
        data: {} as U,
        isPending: false,
        isError: false,
        statusCode: STATUS_CODE.NO_CONTENT,
      };
    }

    const { data, status } = response;

    if (isStatusSuccessful(status)) {
      return {
        data: getProcessed(data, processData),
        isPending: false,
        isError: false,
        statusCode: status,
      };
    }

    return {
      data: {} as U,
      isPending: false,
      isError: true,
      statusCode: status,
      error: data?.errors,
    };
  } catch (e) {
    return {
      data: {} as U,
      isPending: false,
      isError: true,
      statusCode: e.status || e.response?.status,
      error: e.response?.data?.errors || [e.message, e.stack],
    };
  }
};

export default {
  request,
};
