import { Router } from "express";
import { UserController } from "../adapter/primary/http/rest/UserController";
import { UserRepository } from "../adapter/secondary/database/memory/UserRepository";
import { UserUseCase } from "../domain/useCases/user/implementation/UserUseCase";

const userRouter = Router();

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

userRouter.get("/", (request, response) =>
  userController.list(request, response)
);

userRouter.post("/", (request, response) =>
  userController.createUser(request, response)
);

export { userRouter };
