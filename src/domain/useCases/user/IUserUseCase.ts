import { IUserDTO } from "../../entities/user/port";
import { User } from "../../entities/user/user";

interface UserPrimaryPort {
  list(): Promise<User[]>;
  createUser({ email, username }: IUserDTO): Promise<User>;
}

export { UserPrimaryPort };
