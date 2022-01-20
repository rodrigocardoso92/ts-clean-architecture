import { Request, Response } from "express";

import { UserPrimaryPort } from "../../../../domain/entities/user/port";

class UserRestController {
  constructor(private userService: UserPrimaryPort) {}
  async list(request: Request, response: Response): Promise<Response> {
    const users = await this.userService.list();
    return response.status(200).json(users);
  }
  async createUser(request: Request, response: Response): Promise<Response> {
    const { username, email } = request.body;
    const user = await this.userService.createUser({ username, email });
    return response.status(201).json(user);
  }
}

export { UserRestController };
