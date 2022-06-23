import { Router } from "express";

import { RegisterIngredientController } from "./controllers/RegisterIngredientController";
import { RegisterProductController } from "./controllers/RegisterProductController";
import { RegisterSellController } from "./controllers/RegisterSellController";

import { ListProductsController } from "./controllers/ListProductsController";
import { ListIngredientsController } from "./controllers/ListIngredientsController";
import { ListSalesController } from "./controllers/ListSalesController";
import { RegisterBuyController } from "./controllers/RegisterBuyController";
import { ListProductsIngredientsController } from "./controllers/ListProductsIngredientsController";

const routes = Router();

const registerSellController = new RegisterSellController();
const registerProductController = new RegisterProductController();
const registerIngredientController = new RegisterIngredientController();
const getAllProductsController = new ListProductsController();
const getAllIngredientsController = new ListIngredientsController();
const listSalesController = new ListSalesController();
const registerBuyController = new RegisterBuyController();
const listProductsIngredientsController = new ListProductsIngredientsController();

routes.post("/sell", registerSellController.handle);
routes.get("/sell/:date", listSalesController.handle);

routes.post("/buy", registerBuyController.handle);

// PRODUCTS
routes.post("/product", registerProductController.handle);
routes.get("/product", getAllProductsController.handle);

// INGREDIENTS
routes.post("/ingredient", registerIngredientController.handle);
routes.get("/ingredient", getAllIngredientsController.handle);

routes.get("/product/:productId/ingredients", listProductsIngredientsController.handle);

export { routes };
