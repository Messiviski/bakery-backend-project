import { Response, Request } from "express";
import { ListDailyProductionByDateService } from "../services/ListDailyProductionByDateService";

class ListDailyProductionByDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.params;
    const listDailyProductionByDateService = new ListDailyProductionByDateService();

    const dailyProduction = await listDailyProductionByDateService.execute(
      new Date(date)
    );

    return response.status(200).json(dailyProduction);
  }
}

export { ListDailyProductionByDateController };