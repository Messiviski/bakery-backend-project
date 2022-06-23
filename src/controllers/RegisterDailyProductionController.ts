import { Request, Response } from "express"
import { RegisterDailyProductionService } from "../services/RegisterDailyProductionService";

class RegisterDailyProductionController{
  async handle(request: Request, response: Response): Promise<Response>{
    const registerDailyProductionService = new RegisterDailyProductionService();
    const { productId, amount, timestamp } = request.body;

    await registerDailyProductionService.execute({
      productId,
      amount,
      timestamp
    });
    
    return response.status(200).send();
  }

}

export { RegisterDailyProductionController };