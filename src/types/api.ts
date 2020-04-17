export interface IFailedRequest {
  statusCode?: number;
  error?: string | string[] | null;
}

export interface IFetchData<T> extends IFailedRequest {
  data: T;
  isPending?: boolean;
  isError?: boolean;
}

export interface IResponse<T> {
  data: T;
  status: number;
  errors: any;
}

export type ApiDataProcessor = (data: any) => any;

export interface IRequestDataParams {
  url: string;
  processData?: ApiDataProcessor;
}
