import { Request, Response } from "express";
import { ListUserSenderComplimentService } from "../services/ListUserSenderComplimentService";

class ListUserSenderComplimentController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSenderComplimentService = new ListUserSenderComplimentService();
    const compliments = await listUserSenderComplimentService.execute(user_id);
    return response.json(compliments);
  }
}
export { ListUserSenderComplimentController }