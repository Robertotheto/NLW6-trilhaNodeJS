import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiverComplimentService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliment = await complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userReceiver", "userSender", "tag"]
    })
    return compliment;
  }
}
export { ListUserReceiverComplimentService }