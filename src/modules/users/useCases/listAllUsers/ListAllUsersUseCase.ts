import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}
class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user_admin = this.usersRepository.findById(user_id);

    if (user_admin.admin) {
      const users = this.usersRepository.list();
      return users;
    }
    throw new Error("User id is not a user admin");
  }
}

export { ListAllUsersUseCase };
