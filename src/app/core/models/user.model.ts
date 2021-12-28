export interface User {
  filter(arg0: (u: any) => boolean): any;
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  imageUrl: string;
}
