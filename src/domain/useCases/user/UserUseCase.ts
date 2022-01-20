import {
  IUserPrimaryPort,
  IUserSecondaryDatabasePort,
} from "../../entities/user/port";
import { User } from "../../entities/user/user";
import { CreateUserError } from "../../errors/user/CreateUserError";

interface IRequest {
  username: string;
  email: string;
}

class UserUseCase implements IUserPrimaryPort {
  constructor(private userRepository: IUserSecondaryDatabasePort) {}

  async createUser({ username, email }: IRequest): Promise<User> {
    const userAlreadyExists = (await this.list()).find(
      (user) => user.email === email
    );

    if (userAlreadyExists) {
      throw new CreateUserError();
    }

    const user = await this.userRepository.createUser({ username, email });
    return user;
  }
  async list(): Promise<User[]> {
    const users = await this.userRepository.list();
    return users;
  }
}

export { UserUseCase };
