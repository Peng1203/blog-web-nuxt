import type { UseFetchOptions } from 'nuxt/app';
import type { BaseResponse, ResponseListData } from '../types/global';

type RequestParams<T = any> = {
  url: string;
} & UseFetchOptions<T>;

export const useRequest = async <T>(params: RequestParams) => {
  const publicConfig = useRuntimeConfig();
  const BASE_URL = publicConfig.public.BASE_URL;

  const { baseURL, url, method = 'GET', ...args } = params;

  const fullUrl = `${baseURL || BASE_URL}${url}`;

  const { data: res } = await useFetch(fullUrl, {
    ...args,
    lazy: true,
    method,
    watch: false,
    // 类似请求拦截器
    // onRequest({ request, options }) {
    //   console.log('onRequest 执行... ------', request, options);
    // },
    // onResponse({ request, response, options }) {
    //   console.log(
    //     `%c onResponse 执行...  ----`,
    //     'color: #fff;background-color: #000;font-size: 18px',
    //     request,
    //     response,
    //     options
    //   );
    // },
    // onRequestError() { },
    // onResponseError() { }
  });

  return { data: res.value } as {
    data: BaseResponse<T>;
  };
};
