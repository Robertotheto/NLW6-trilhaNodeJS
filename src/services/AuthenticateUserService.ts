import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
  email: string;
  password: string;
}
class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);
    const user = await userRepositories.findOne({ email });
    if (!user) {
      throw new Error("Email/Password incorrect");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }
    const token = sign(
      { email: user.email },
      "90a12c9fc231e920a6754ca1a2f51bfc",
      {
        subject: user.id,
        expiresIn: '1d',
      },
    )
    return token;
  }
}

export { AuthenticateUserService }