export interface LoginPayload {
  phone: string;
  password: string;
  accountType: "STUDENT" | "TEACHER" | "PARENT";
}

export interface LoginResponse {
  phone: string;
  accountType: "STUDENT" | "TEACHER" | "PARENT";
  tokens: {
    access_token: string;
    refresh_token: string;
    type: string;
    algorithm: string;
  };
}