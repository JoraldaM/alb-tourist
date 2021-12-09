import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  navItems = [
    {
      label: 'Dashboard',
      path: 'dashboard',
      icon: 'dashboard',
      roles: ['admin'],
    },
    {
      label: 'Packages',
      path: 'packages',
      icon: 'category',
      roles: ['admin'],
    },
    {
      label: 'Users',
      path: 'manage-users',
      icon: 'people',
      roles: ['admin'],
    },
  ];
}
