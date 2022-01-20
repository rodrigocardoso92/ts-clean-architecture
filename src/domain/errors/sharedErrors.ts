import { AppError } from "./appError";

class InvalidIdError extends AppError {
  constructor() {
    super("invalid uuid", 403);
  }
}

export { InvalidIdError };
