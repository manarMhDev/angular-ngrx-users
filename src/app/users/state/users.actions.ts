import { createAction, props } from "@ngrx/store";
import { PaginatedResult, User } from "../../models/user.model";

export const LOAD_USERS = '[users page] load users';
export const LOAD_USERS_SUCCESS = '[users page] load users success';

export const loadUsers = createAction(LOAD_USERS,  props<{ page: number }>());
export const loadUsersSuccess = createAction(LOAD_USERS_SUCCESS,props<{users:PaginatedResult}>());


export const LOAD_USER = '[user page] load user';
export const LOAD_USER_SUCCESS = '[user page] load user success';
export const loadSingleUser = createAction(LOAD_USER,  props<{ id: string }>());
export const loadSingleUserSuccess = createAction(LOAD_USER_SUCCESS,props<{user:User}>());