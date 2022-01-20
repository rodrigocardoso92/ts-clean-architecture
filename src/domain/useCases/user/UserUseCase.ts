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
    const userAlreadyExists = (await this.all()).find(
      (user) => user.email === email
    );

    if (userAlreadyExists) {
      throw new CreateUserError();
    }

    const user = await this.userRepository.createUser({ username, email });
    return user;
  }
  async all(): Promise<User[]> {
    const users = await this.userRepository.all();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    return user;
  }
}

export { UserUseCase };
