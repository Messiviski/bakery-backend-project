import { Request, Response } from "express";
import { RegisterSellService } from "../services/RegisterSellService";

class RegisterSellController {
  async handle(request: Request, response: Response): Promise<Response> {
    const registerSellService = new RegisterSellService()
    
    const { amount, timestamp, productId } = request.body;

    await registerSellService.execute({
      amount,
      timestamp,
      productId
    })

    return response.status(200).send();
  }
}

export { RegisterSellController };