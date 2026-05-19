import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {
  CreateCategory,
} from './api';
import { type CategoryPayload } from './types';

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CategoryPayload) => {
      const response = await CreateCategory(payload);
      return response;
    },
    onSuccess: (data) => {
      if (!data) return;
      
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: (error) => {
      console.error("Create category error:", error);
    },
  });
}