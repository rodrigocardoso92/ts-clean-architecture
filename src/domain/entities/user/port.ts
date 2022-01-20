import { User } from "./user";

interface IUserDTO {
  email: string;
  username: string;
}

interface IUserPrimaryPort {
  list(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
}

interface IUserSecondaryDatabasePort {
  list(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUserPrimaryPort, IUserSecondaryDatabasePort, IUserDTO };
