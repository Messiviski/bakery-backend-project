import { Request, Response } from "express"
import { RegisterDailyProductionService } from "../services/RegisterDailyProductionService";


class RegisterDailyProductionController{
  async handle(request: Request, response: Response): Promise<Response>{
    const registerDailyProductionService = new RegisterDailyProductionService();
    const data = request.body;

    await registerDailyProductionService.execute( data );
    
    return response.status(200).send();
  }

}

export { RegisterDailyProductionController };