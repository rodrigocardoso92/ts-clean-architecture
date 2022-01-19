import { v4 as uuid } from "uuid";

interface IUser {
  username: string;
  email: string;
}

class User {
  id?: string;
  username: string;
  email: string;

  constructor({ username, email }: IUser) {
    if (!this.id) {
      this.id = uuid();
    }
    this.email = email;
    this.username = username;
  }
}

export { User };
