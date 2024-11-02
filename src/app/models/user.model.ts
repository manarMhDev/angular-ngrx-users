export interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  export interface PaginatedResult {
    data: User[];
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
  }

  export interface Details {
    data : {
      id: string;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    },
    support : {
      url:string,
      text:string
    }

  }
