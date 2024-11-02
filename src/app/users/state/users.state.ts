import { PaginatedResult, User } from "../../models/user.model"

export interface UsersState{
users: PaginatedResult;
}
export const initialState : UsersState = {
    users : {
        data: [],
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
    }
}

export interface SingleUserState{
    user: User;
    }
    export const initialUserState : SingleUserState = {
        user : {
            id: '',
            email: '',
            first_name: '',
            last_name: '',
            avatar: '',
        }
    }