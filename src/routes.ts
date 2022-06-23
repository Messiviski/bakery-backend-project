import { RegisterIngredientController } from "./controllers/RegisterIngredientController";
import { RegisterProductController } from "./controllers/RegisterProductController";
import { RegisterSellController } from "./controllers/RegisterSellController";
import { RegisterDailyProductionController } from "./controllers/RegisterDailyProductionController";

import { Router } from "express";
import { ListProductsController } from "./controllers/ListProductsController";
import { ListIngredientsController } from "./controllers/ListIngredientsController";
import { ListDailyProductionByDateController } from "./controllers/ListDailyProductionByDateController";

const routes = Router();
const registerSellController = new RegisterSellController();
const registerProductController = new RegisterProductController();
const registerIngredientController = new RegisterIngredientController();
const getAllProductsController = new ListProductsController();
const getAllIngredientsController = new ListIngredientsController();
const registerDailyProductionController = new RegisterDailyProductionController();
const listDailyProductionByDateController = new ListDailyProductionByDateController();

routes.post("/sell", registerSellController.handle);

// PRODUCTS
routes.post("/product", registerProductController.handle);
routes.get("/product", getAllProductsController.handle);

// INGREDIENTS
routes.post("/ingredient", registerIngredientController.handle);
routes.get("/ingredient", getAllIngredientsController.handle);

// DAILY PRODUCTION
routes.post("/daily", registerDailyProductionController.handle);
routes.get("/daily/:date", listDailyProductionByDateController.handle);

export { routes };
