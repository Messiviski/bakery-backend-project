import { Request, Response } from "express";
import { ListProductsIngredientsService } from "../services/ListProductsIngredientsService";

class ListProductsIngredientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { productId } = request.params;
    const listProductsIngredientsService = new ListProductsIngredientsService();

    const items = await listProductsIngredientsService.execute(
      parseInt(productId)
    );

    return response.status(200).json(items)
  }
}

export { ListProductsIngredientsController };