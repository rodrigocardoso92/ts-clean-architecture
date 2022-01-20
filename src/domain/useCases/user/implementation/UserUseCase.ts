import {
  IUserPrimaryPort,
  IUserSecondaryDatabasePort,
} from "../../../entities/user/port";
import { User } from "../../../entities/user/user";

interface IRequest {
  username: string;
  email: string;
}

class UserUseCase implements IUserPrimaryPort {
  constructor(private userRepository: IUserSecondaryDatabasePort) {}

  async createUser({ username, email }: IRequest): Promise<User> {
    const user = await this.userRepository.createUser({ username, email });
    return user;
  }
  async list(): Promise<User[]> {
    const users = await this.userRepository.list();
    return users;
  }
}

export { UserUseCase };
