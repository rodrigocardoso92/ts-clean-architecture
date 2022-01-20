import { User } from "./user";

interface IUserDTO {
  email: string;
  username: string;
}

interface IUserPrimaryPort {
  all(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
  findById(id: string): Promise<User>;
  deleteById(id: string): Promise<void>;
}

interface IUserSecondaryDatabasePort {
  all(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
  findById(id: string): Promise<User>;
  deleteById(id: string): Promise<void>;
}

export { IUserPrimaryPort, IUserSecondaryDatabasePort, IUserDTO };
