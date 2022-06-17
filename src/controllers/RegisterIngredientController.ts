import { Request, Response } from "express"

class RegisterIngredientController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { amount, name } = request.body;
    
    return response.status(200).send();
  }

}

export { RegisterIngredientController };