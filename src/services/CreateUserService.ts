import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from 'bcryptjs';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}
class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {

    const userRepositories = getCustomRepository(UsersRepositories);
    if (!email) {
      throw new Error('Email incorrect');
    }
    const userAlreadyExists = await userRepositories.findOne({ email });
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    const passwordHash = await hash(password, 8);
    const user = userRepositories.create({
      name,
      email,
      admin,
      password: passwordHash
    });
    await userRepositories.save(user);
    return user;
  }
}

export { CreateUserService }