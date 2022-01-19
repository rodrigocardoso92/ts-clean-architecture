import { User } from "./user";

interface IUserDTO {
  email: string;
  username: string;
}

interface UserPrimaryPort {
  list(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
}

interface UserSecondaryDatabasePort {
  list(): Promise<User[]>;
  createUser({ username, email }: IUserDTO): Promise<User>;
}

export { UserPrimaryPort, UserSecondaryDatabasePort, IUserDTO };
