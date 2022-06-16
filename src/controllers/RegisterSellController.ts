import { Request, response, Response } from "express";
import { RegisterSellService } from "services/RegisterSellService";

class RegisterSellController {
  private registerSellService: RegisterSellService;

  constructor() {
    this.registerSellService = new RegisterSellService()
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { amount, timestamp, productId } = request.body;

    await this.registerSellService.execute({
      amount,
      timestamp,
      productId
    })

    return response.status(200).send();
  }
}

export { RegisterSellController };