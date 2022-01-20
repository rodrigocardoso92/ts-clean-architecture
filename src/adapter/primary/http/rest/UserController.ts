import { Request, Response } from "express";

import { IUserPrimaryPort } from "../../../../domain/entities/user/port";

class UserRestController {
  constructor(private userUseCase: IUserPrimaryPort) {}
  async allUsers(request: Request, response: Response): Promise<Response> {
    const users = await this.userUseCase.all();
    return response.status(200).json(users);
  }
  async createUser(request: Request, response: Response): Promise<Response> {
    const { username, email } = request.body;
    const user = await this.userUseCase.createUser({ username, email });
    return response.status(201).json(user);
  }
  async findUserById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user = await this.userUseCase.findById(id);
    return response.status(200).json(user);
  }
  async deleteUserById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    await this.userUseCase.deleteById(id);
    return response.status(204).send();
  }
}

export { UserRestController };
