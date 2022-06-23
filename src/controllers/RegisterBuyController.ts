import { Request, Response } from "express";
import { RegisterBuyService } from "../services/RegisterBuyService";

class RegisterBuyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const registerBuyService = new RegisterBuyService()

    const { amount, timestamp, ingredientId, providerName } = request.body;

    await registerBuyService.execute({
      amount,
      timestamp,
      ingredientId,
      providerName
    })

    return response.status(200).send();
  }
} 

export { RegisterBuyController };