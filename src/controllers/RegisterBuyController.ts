import { Request, Response } from "express;
import { RegisterBuyService } from "../services/RegisterBuyService";

class RegisterBuyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const registerBuyService = new RegisterBuyServide()

    const { amount, timestamp, ingredientId } = request.body;

    await registerBuyService.execute({
      amount,
      timestamp,
      ingredientId
    })

    return response.status(200).send();
  }
} 

export { RegisterBuyController };