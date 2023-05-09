interface Result<T> {
  total: number;
  data: Array<T>;
};

interface SuccessResponse<T> {
  success: true;
  message: string;
  result: Result<T>;
};

interface FailResponse {
  success: false;
  message: string;
  result: null;
};

export type Response<T> = SuccessResponse<T> | FailResponse;
