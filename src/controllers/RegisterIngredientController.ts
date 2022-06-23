import { Request, Response } from "express"
import { RegisterIngredientService } from "../services/RegisterIngredientService";

class RegisterIngredientController{
  async handle(request: Request, response: Response): Promise<Response>{
    const registerIngredientService = new RegisterIngredientService();
    const { name } = request.body;

    await registerIngredientService.execute(name);
    
    return response.status(200).send();
  }

}

export { RegisterIngredientController };