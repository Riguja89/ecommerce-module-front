import { createAction, props } from "@ngrx/store";
import { IrefreshToken, IresponseToken } from "../../models/refreshToken.models";


export const loadAuth=createAction('[Auth] Load Auth',props<{refreshToken: IrefreshToken}>());
export const loadAuthSuccess = createAction('[Auth] Load Auth Success', props<{ auths: IresponseToken }>());
export const loadAuthFailure = createAction('[Auth] Load Auth Failure', props<{ error: any }>());

