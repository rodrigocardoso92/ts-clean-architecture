import { Router } from "express";

import { UserRestController } from "../adapter/primary/http/rest/UserController";
import { UserRepository } from "../adapter/secondary/database/memory/UserRepository";
import { UserUseCase } from "../domain/useCases/user/UserUseCase";

const userRouter = Router();

const userRepository = UserRepository.getInstance();
const userUseCase = new UserUseCase(userRepository);
const userRestController = new UserRestController(userUseCase);

userRouter.get("/", (request, response) =>
  userRestController.allUsers(request, response)
);

userRouter.post("/", (request, response) =>
  userRestController.createUser(request, response)
);

userRouter.get("/:id", (request, response) =>
  userRestController.findUserById(request, response)
);

export { userRouter };
