import { User } from "./user.model";

export interface PaginatedData<T>{
    data: T[],
    pagination:{
      currentPage: number,
      totalPages: number,
      pageSize: number,
      totalCount: number,
      hasPrevious: boolean,
      hasNext: boolean
    }
}