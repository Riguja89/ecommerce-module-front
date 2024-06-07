
import { createSelector } from "@ngrx/store";
import { AppState } from "../store";
import { CopiesState } from "../reducers/reducers";
import { AuthState } from "../reducers/auth.reducers";
export const selectCopiesState = (state: AppState) => state.copies
export const selectAuthState = (state: AppState) => state.auths



export const selectCopies = createSelector(
  selectCopiesState,
  (state: CopiesState) => state.copies
);

export const selectCart = createSelector(
  selectCopiesState,
  (state: CopiesState) => state.cart
);


  export const selectAuths = createSelector(
    selectAuthState,
    (state: AuthState) => state.auths
  );


export const selectCheckoutResponse = createSelector(
  selectCopiesState,
  (state: CopiesState) => state.checkoutResponse
);

export const selectCheckoutError = createSelector(
  selectCopiesState,
  (state: CopiesState) => state.checkoutError
);

export const selectCheckoutRequest = createSelector(
  selectCopiesState,
  (state: CopiesState) => state.checkoutRequest
);

export const selectShowSpinner = createSelector(
  selectCopiesState,
  (state: CopiesState) => state.showSpinner
);


