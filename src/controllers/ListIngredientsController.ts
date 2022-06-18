import { Response, Request } from "express";
import { ListIngredientsService } from "../services/ListIngredientsService";

class ListIngredientsController {
  async handle(request: Request, response: Response): Promise<Response>{
    const listIngredientsService = new ListIngredientsService();
    const ingredients = await listIngredientsService.execute();

    return response.status(200).json(ingredients);
  }

}

export { ListIngredientsController };