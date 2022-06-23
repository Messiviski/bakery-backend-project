import { Request, Response } from "express";
import { RegisterProductService } from "../services/RegisterProductService";

class RegisterProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const registerProductService = new RegisterProductService()
    const { name, ingredients } = request.body;

    await registerProductService.execute({ name, ingredients });

    return response.status(200).send();
  }
}

export { RegisterProductController };