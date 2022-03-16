import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const profile_user = this.usersRepository.findById(user_id);

    if (!profile_user) {
      throw new Error("User does not exist!");
    }

    return profile_user;
  }
}

export { ShowUserProfileUseCase };
