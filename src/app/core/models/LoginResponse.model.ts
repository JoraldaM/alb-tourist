

export interface LoginResponse {
  id: number | null;
  name: string | null;
  email: string | null;
  role: string | null; // admin, user
  token: string | null;
}
