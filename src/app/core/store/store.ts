
import { Action, ActionReducer } from "@ngrx/store";
import { CopiesState, copiesReducer } from "./reducers/reducers";
import { AuthState, authReducer } from "./reducers/auth.reducers";
import { CopiesEffects } from "./effects/effects";



export interface AppState {
    copies: CopiesState;
    auths: AuthState
  }

  export interface AppStore {
    copies: ActionReducer<CopiesState, Action>;
    auths: ActionReducer<AuthState, Action>;
  }

  export const appStore: AppStore = {
    copies: copiesReducer,
    auths: authReducer
  };



export const appEffects = [CopiesEffects];
