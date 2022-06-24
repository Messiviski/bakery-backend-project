import { Request, Response } from "express";
import { ListWasteService } from "../services/ListWasteService";

class ListWasteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.params;
    const listWasteService = new ListWasteService();

    const waste = await listWasteService.execute(
      new Date(date)
    );

    return response.status(200).json(waste)
  }
}

export { ListWasteController }