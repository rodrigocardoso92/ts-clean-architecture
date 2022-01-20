import { AppError } from "../appError";

class CreateUserError extends AppError {
  constructor() {
    super("email already registered");
  }
}

export { CreateUserError };
