import { validate } from "uuid";

import {
  IUserPrimaryPort,
  IUserSecondaryDatabasePort,
} from "../../entities/user/port";
import { User } from "../../entities/user/user";
import { InvalidIdError } from "../../errors/sharedErrors";
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
    if (!validate(id)) {
      throw new InvalidIdError();
    }
    const user = await this.userRepository.findById(id);
    return user;
  }

  async deleteById(id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}

export { UserUseCase };
