import Http from "~/features/lib/interceptor";
import type { LoginPayload, LoginResponse } from "./types";
import axios from "axios";


export const Login = async (payload: LoginPayload) => {
  try {
    const res = await Http.post<LoginResponse>("/auth/login", payload);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};
