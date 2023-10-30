export interface IRefreshResponse {
  readonly accessToken: string;
  readonly refreshToken: string;
}

export interface IUserResponse {
  readonly user: {
    name: string;
    email: string;
  };
}

export interface IRegister {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export interface ILogin {
  readonly email: string;
  readonly password: string;
}

export interface IOrder {
  readonly name: string;
  readonly order: {
    readonly number: number;
  };
}

export interface IResetPassword {
  password: string;
  token: string;
}

export type TResponse = IRefreshResponse & IUserResponse;
