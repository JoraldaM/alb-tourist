import { Role } from "./role";

export interface LoginResponse {
  id: number | null;
  name: string | null;
  email: string | null;
  role: string | null; // admin, user
  // role: Role,
  token: string | null;
}
