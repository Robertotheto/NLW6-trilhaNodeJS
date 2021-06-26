import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSenderComplimentService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliment = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      }
    })
    return compliment;
  }
}
export { ListUserSenderComplimentService }