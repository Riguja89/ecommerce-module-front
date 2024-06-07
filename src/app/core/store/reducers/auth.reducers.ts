import { createReducer, on } from '@ngrx/store';
import { IresponseToken } from "../../models/refreshToken.models";
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  auths: IresponseToken;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  auths:{
    token:null,
    userId:null,
    userName:null
  },
  loading: false,
  error: null,
};

export const authReducer=createReducer(
  initialState,
  on(AuthActions.loadAuth, (state) => ({ ...state, loading: true })),

  on(AuthActions.loadAuthSuccess, (state, { auths }) => ({
    ...state,
    auths,
    loading: false,
  })),

  on(AuthActions.loadAuthFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

)
