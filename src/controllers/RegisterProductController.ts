import { Request, Response } from "express";
import { RegisterProductService } from "../services/RegisterProductService";

class RegisterProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const registerProductService = new RegisterProductService()
    const { name } = request.body;

    await registerProductService.execute({ name });

    return response.status(200).send();
  }
}

export { RegisterProductController };