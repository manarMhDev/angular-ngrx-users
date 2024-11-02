
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SingleUserState } from "../users/state/users.state";
import { SINGLE_USER_STATE_NAME } from "../users/state/users.selector";
import { singleUserReducer } from "../users/state/users.reducer";

export interface AppState{
    [SHARED_STATE_NAME]: SharedState;
    [SINGLE_USER_STATE_NAME]: SingleUserState;
}
export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [SINGLE_USER_STATE_NAME]: singleUserReducer
}