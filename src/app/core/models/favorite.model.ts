import { User } from './user.model';
export interface Favorites {
  id: number;
  packageId: number;
  package: {
    id: number;
    name: string;
    userId: number;
    user: User;
  };
}
