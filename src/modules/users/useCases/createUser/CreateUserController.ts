import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const create_user = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(create_user).send();
    } catch (Error) {
      return response.status(400).json({ error: Error.message }).send();
    }
  }
}

export { CreateUserController };
