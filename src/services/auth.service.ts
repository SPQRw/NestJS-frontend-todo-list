import { instance } from "../api/axios.api";
import { IResponseUserData, IUserData } from "../types/types";

export const AuthService = {
  async registration(userData: IUserData): Promise<string | undefined> {
    const { data } = await instance.post<string>("auth/register", userData);
    return data;
  },
  async login(userData: IUserData): Promise<string | undefined> {
    const { data } = await instance.post<string>("auth/login", userData);
    return data;
  },
  async getMe(): Promise<IResponseUserData | undefined> {
    const { data } = await instance.get<IResponseUserData>("users");
    if (data) return data;
  },
};
