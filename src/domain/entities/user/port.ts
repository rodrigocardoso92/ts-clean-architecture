import { User } from "./user";

interface IUserDTO {
  email: string;
  username: string;
}

interface IUserPrimaryPort {
  all(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
  findById(id: string): Promise<User>;
}

interface IUserSecondaryDatabasePort {
  all(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUserPrimaryPort, IUserSecondaryDatabasePort, IUserDTO };
