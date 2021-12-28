export interface Package {
    id: number;
    name: string;
    user: {
        id:number;
        name: string;
        email: string;
        role: number;
        imageUr: string;
    }
  }