import axios from "axios";
import type { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const Http = axios.create({
  baseURL: `${import.meta.env.VITE_PUBLIC_API_BASE_URL}/api/v1`,
  timeout:30000
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: unknown) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

Http.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");

    if (token) {
      config.headers = config.headers ?? {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

Http.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      // If "Remember me" was not checked on login, don't refresh
      if (!Cookies.get("rememberMe")) {
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }

      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) {
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        Cookies.remove("rememberMe");
        window.location.href = "/login";
        return Promise.reject(error);
      }

      // If another request is already refreshing, queue this one
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers = { ...originalRequest.headers, Authorization: `Bearer ${token}`};
            return Http(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await axios.post<RefreshTokenResponse>(
          `${import.meta.env.VITE_PUBLIC_API_BASE_URL}/auth/refresh-token-by-access-token`,
          {
            
            body: JSON.stringify({
              refreshToken: refreshToken,
            }),
          }
        );

        Cookies.set("token", data.access_token, { expires: 1 });
        Cookies.set("refreshToken", data.refresh_token, { expires: 30 });

        processQueue(null, data.access_token);

        originalRequest.headers = { ...originalRequest.headers, Authorization: `Bearer ${data.access_token}` };
        return Http(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        Cookies.remove("rememberMe");
        window.location.href = "/login";
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default Http;