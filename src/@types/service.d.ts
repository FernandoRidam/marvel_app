interface ResultArray<T> {
  total: number;
  data: Array<T>;
};

interface SuccessResponseArray<T> {
  success: true;
  message: string;
  result: ResultArray<T>;
};

interface SuccessResponse<T> {
  success: true;
  message: string;
  result: T;
};

interface FailResponse {
  success: false;
  message: string;
  result: null;
};

export type ResponseArray<T> = SuccessResponseArray<T> | FailResponse;
export type Response<T> = SuccessResponse<T> | FailResponse;
