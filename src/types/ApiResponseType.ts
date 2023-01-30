import ApiErrorType from '@/types/ApiErrorType';

type ApiResponseType<BodyType> = {
  code: string,
  error?: ApiErrorType,
  body?: BodyType,
};

export default ApiResponseType;
