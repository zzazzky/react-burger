interface IIngredient {
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

interface Istore {
  readonly constructor: {
    readonly bun: IIngredient | null;
    readonly ingredients: Array<IIngredient> | null;
    readonly sum: number;
  };
  readonly ingredients: {
    readonly buns: Array<IIngredient> | null;
    readonly sauces: Array<IIngredient> | null;
    readonly mains: Array<IIngredient> | null;
    readonly ingredientsRequest: boolean;
    readonly ingredientsFeedFailed: boolean;
    readonly ingredientsFeedSuccess: boolean;
    readonly currentIngredient: IIngredient;
  };
  readonly order: {
    readonly currentOrder: {
      readonly number: number;
      readonly name: string;
    } | null;
    readonly orderRequest: boolean;
    readonly orderFeedFailed: boolean;
    readonly orderFeedSuccess: boolean;
  };
  readonly profile: {
    readonly user: {
      readonly email: string | null;
      readonly name: string | null;
      readonly isLoggedIn: boolean;
    };
    readonly authRequest: {
      readonly isAuthRequest: boolean;
      readonly isAuthRequestSuccess: boolean;
      readonly isAuthRequestFailed: boolean;
    };
    readonly logoutRequest: {
      readonly isLogoutRequest: boolean;
      readonly isLogoutRequestSuccess: boolean;
      readonly isLogoutRequestFailed: boolean;
    };
    readonly tokenRequest: {
      readonly isTokenRequest: boolean;
      readonly isTokenRequestSuccess: boolean;
      readonly isTokenRequestFailed: boolean;
    };
    readonly sendResetCodeRequest: {
      readonly isResetCodeRequest: boolean;
      readonly isResetCodeSuccess: boolean;
      readonly isResetCodeFailed: boolean;
    };
    readonly resetPasswordRequest: {
      readonly isResetPasswordRequest: boolean;
      readonly isResetPasswordSuccess: boolean;
      readonly isResetPasswordFailed: boolean;
    };
    readonly userInfoRequest: {
      readonly isUserInfoRequest: boolean;
      readonly isUserInfoRequestSuccess: boolean;
      readonly isUserInfoRequestFailed: boolean;
    };
    readonly changeUserInfoRequest: {
      readonly isChangeUserInfoRequest: boolean;
      readonly isChangeUserInfoRequestFailed: boolean;
      readonly isChangeUserInfoRequestSuccess: boolean;
    };
  };
}

export { type IIngredient, type Istore };
