import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = <{ user_id: string }>request.headers;
    try {
      const listAllUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).json(listAllUsers);
    } catch (Error) {
      return response.status(400).json({ error: Error.message });
    }
  }
}

export { ListAllUsersController };
