 import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import Cookies from "js-cookie";

import { type LoginPayload } from './types';
import { Login } from './api';

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials:LoginPayload) => {
      const response = await Login(credentials)
      return response;
    },
    onSuccess: (data) => { 

        if (!data) return;
        
    Cookies.set("token", data.tokens.access_token, { expires: 1 });
    Cookies.set("refreshToken", data.tokens.refresh_token, { expires: 30 });
    queryClient.invalidateQueries({ queryKey: ['user'] });
      
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
}
