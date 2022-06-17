import { RegisterIngredientController } from "./controllers/RegisterIngredientController";
import { RegisterProductController } from "./controllers/RegisterProductController";
import { RegisterSellController } from "./controllers/RegisterSellController";

import { Router } from "express";
import { ListProductsController } from "./controllers/ListProductsController";

const routes = Router();
const registerSellController = new RegisterSellController();
const registerProductController = new RegisterProductController();
const registerIngredientController = new RegisterIngredientController();
const getAllProductsController = new ListProductsController();

routes.post("/sell", registerSellController.handle);

// PRODUCTS
routes.post("/product", registerProductController.handle);
routes.get("/product", getAllProductsController.handle)

// INGREDIENTS
routes.post("/ingredient", registerIngredientController.handle);

export { routes };
