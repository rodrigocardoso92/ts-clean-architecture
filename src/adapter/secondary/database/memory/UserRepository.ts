import {
  IUserDTO,
  UserSecondaryDatabasePort,
} from "../../../../domain/entities/user/port";
import { User } from "../../../../domain/entities/user/user";

class UserRepository implements UserSecondaryDatabasePort {
  private usersStorage: User[];

  constructor() {
    this.usersStorage = [];
  }

  async createUser({ email, username }: IUserDTO): Promise<User> {
    const user = new User({ email, username });

    await this.usersStorage.push(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.usersStorage;
    return users;
  }
}

export { UserRepository };
