import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
} from 'axios'
import { BASE_URL } from '../constants'
import { getAccessToken, clearAccessToken } from '../utils/tokenStorage'

interface IRequestOptions {
  url: AxiosRequestConfig['url']
  params?: AxiosRequestConfig['params']
  method?: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  headers?: AxiosRequestConfig['headers']
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      ;(config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error),
)

// Response Interceptor to handle token expiration (401 Unauthorized)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      const currentPath = window.location.pathname

      // logoutAPI({ refresh_token: getRefreshToken() })
      clearAccessToken()

      window.location.href = `/login?redirect=${encodeURIComponent(
        currentPath,
      )}`
    }

    return Promise.reject(error)
  },
)

export const request = ({
  url,
  params,
  method = 'GET',
  data,
  headers = {},
}: IRequestOptions) =>
  axiosInstance({
    url,
    params,
    method,
    data,
    headers: {
      ...headers,
    },
  })
