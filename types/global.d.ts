export interface ResponseListData<T> {
  list: T[];
  total: number;
}

export interface BaseResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}
