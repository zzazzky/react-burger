export interface IIngredient {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
}

export interface IProfileState {
  user: {
    email: string | null;
    name: string | null;
    isLoggedIn: boolean;
  };
  authRequest: {
    isAuthRequest: boolean;
    isAuthRequestSuccess: boolean;
    isAuthRequestFailed: boolean;
  };
  logoutRequest: {
    isLogoutRequest: boolean;
    isLogoutRequestSuccess: boolean;
    isLogoutRequestFailed: boolean;
  };
  userInfoRequest: {
    isUserInfoRequest: boolean;
    isUserInfoRequestSuccess: boolean;
    isUserInfoRequestFailed: boolean;
  };
  changeUserInfoRequest: {
    isChangeUserInfoRequest: boolean;
    isChangeUserInfoRequestFailed: boolean;
    isChangeUserInfoRequestSuccess: boolean;
  };
}

export interface IConstructorState {
  bun: IIngredient | null;
  ingredients: Array<IIngredient> | null;
  sum: number;
}

export interface IIngredientState {
  buns: Array<IIngredient> | null;
  sauces: Array<IIngredient> | null;
  mains: Array<IIngredient> | null;
  ingredientsRequest: boolean;
  ingredientsFeedFailed: boolean;
  ingredientsFeedSuccess: boolean;
  currentIngredient: IIngredient | null;
}

export interface IOrderState {
  currentOrder: null | {
    number: number;
    name: string;
  };
  orderRequest: boolean;
  orderFeedFailed: boolean;
  orderFeedSuccess: boolean;
}

export interface IResetPasswordState {
  sendResetCodeRequest: {
    isResetCodeRequest: boolean;
    isResetCodeSuccess: boolean;
    isResetCodeFailed: boolean;
  };
  resetPasswordRequest: {
    isResetPasswordRequest: boolean;
    isResetPasswordSuccess: boolean;
    isResetPasswordFailed: boolean;
  };
}

export interface ITokenState {
  isTokenRequest: boolean;
  isTokenRequestSuccess: boolean;
  isTokenRequestFailed: boolean;
}

export interface Istore {
  readonly constructor: IConstructorState;
  readonly ingredients: IIngredientState;
  readonly order: IOrderState | null;
  readonly profile: IProfileState;
  readonly resetPassword: IResetPasswordState;
  readonly token: ITokenState;
}
