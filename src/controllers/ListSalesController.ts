import { Request, Response } from "express";
import { ListSalesService } from "../services/ListSalesService";

class ListSalesController {
  async handle(request:Request, response:Response): Promise<Response> {
    const { date } = request.params;
    const listSalesService = new ListSalesService();

    const sales = await listSalesService.execute(new Date(date));

    return response.status(200).json(sales);
  }

}

export { ListSalesController };