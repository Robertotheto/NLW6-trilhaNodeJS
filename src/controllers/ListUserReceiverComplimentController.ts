import { Request, Response } from "express";
import { ListUserReceiverComplimentService } from "../services/ListUserReceiverComplimentService";


class ListUserReceiverComplimentController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiverComplimentService = new ListUserReceiverComplimentService();
    const compliments = await listUserReceiverComplimentService.execute(user_id);
    return response.json(compliments);
  }
}
export { ListUserReceiverComplimentController }