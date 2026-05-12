import Http from "~/features/lib/interceptor";
import type { CategoryPayload, CategoryResponse } from "./types";
import axios from "axios";

export const GetCategories = async () => {
  try {
    const res = await Http.get<CategoryResponse[]>("/categories");
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

export const GetCategoryById = async (id: string) => {
  try {
    const res = await Http.get<CategoryResponse>(`/categories/${id}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

export const UpdateCategory = async (id: string, payload: CategoryPayload) => {
  try {
    const res = await Http.put<CategoryResponse>(`/categories/${id}`, payload);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

export const DeleteCategory = async (id: string) => {
  try {
    const res = await Http.delete(`/categories/${id}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

export const CreateCategory = async (payload: CategoryPayload) => {
  try {
    const res = await Http.post<CategoryResponse>("/categories", payload);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
  }
};
