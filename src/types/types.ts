export interface IUser {
  id: number;
  email: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IResponseUserData {
  id: number;
  email: string;
  hashedPassword: string;
  firstName: string;
  secondName: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}
