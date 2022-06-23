import { Request, Response } from "express";
import { ListBuysService } from "../services/ListBuysService";

class ListBuysController {
  async handle(request:Request, response:Response): Promise<Response> {
    const { date } = request.params;
    const listBuysService = new ListBuysService();
    

    const buys = await listBuysService.execute(new Date(date));


    return response.status(200).json(buys);
  }

}

export { ListBuysController };