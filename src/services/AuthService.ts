import {
  IEnteprise,
  ILoginResponse,
  ISignUpEnterprisePayload,
  ISignUpPayload,
  IUser,
} from "../interfaces";
import { Api } from "../providers";

function login(email: string, password: string) {
  return Api.post<ILoginResponse>("/auth/login", { email, password });
}

function signUp(data: ISignUpPayload) {
  return Api.post<IUser>("/v1/users", data);
}

function signUpEnterprise(data: ISignUpEnterprisePayload) {
  return Api.post<IEnteprise>("/v1/enterprises", data);
}

export const AuthService = {
  login,
  signUp,
  signUpEnterprise,
};
