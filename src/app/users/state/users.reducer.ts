import { createReducer, on } from "@ngrx/store"
import { initialState, initialUserState } from "./users.state"
import { loadSingleUserSuccess, loadUsersSuccess } from "./users.actions"

const _userReducer = createReducer(initialState,
    on(loadUsersSuccess,(state,action) =>{
      return {
        ...state,
        users:action.users
      }
    })
)
export function userReducer(state:any,action:any){
    return _userReducer(state,action)
}

const _singleUserserReducer = createReducer(initialUserState,
  on(loadSingleUserSuccess,(state,action) =>{
    return {
      ...state,
      user:action.user
    }
  })
)
export function singleUserReducer(state:any,action:any){
  return _singleUserserReducer(state,action)
}