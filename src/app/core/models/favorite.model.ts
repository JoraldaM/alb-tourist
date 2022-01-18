import { Package } from 'src/app/core/models/packageRes.model';
import { User } from './user.model';
export interface Favorites {
  id: number;
  packageId: number;
  package: Package;
  user: User;
}
