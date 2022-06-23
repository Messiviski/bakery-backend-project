import { Response, Request } from "express";
import { ListProductsService } from "../services/ListProductsService";

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsService = new ListProductsService();
    const products = await listProductsService.execute();

    console.log("Controller", products)

    return response.status(200).json(products);
  }
}

export { ListProductsController };