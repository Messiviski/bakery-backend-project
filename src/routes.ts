import { Router } from "express";

import { RegisterIngredientController } from "./controllers/RegisterIngredientController";
import { RegisterProductController } from "./controllers/RegisterProductController";
import { RegisterSellController } from "./controllers/RegisterSellController";
import { RegisterDailyProductionController } from "./controllers/RegisterDailyProductionController";

import { ListProductsController } from "./controllers/ListProductsController";
import { ListIngredientsController } from "./controllers/ListIngredientsController";
import { ListSalesController } from "./controllers/ListSalesController";
import { RegisterBuyController } from "./controllers/RegisterBuyController";
import { ListProductsIngredientsController } from "./controllers/ListProductsIngredientsController";
import { ListDailyProductionByDateController } from "./controllers/ListDailyProductionByDateController";
import { ListBuysController } from "./controllers/ListBuysController";

const routes = Router();

const registerSellController = new RegisterSellController();
const registerProductController = new RegisterProductController();
const registerIngredientController = new RegisterIngredientController();
const getAllProductsController = new ListProductsController();
const getAllIngredientsController = new ListIngredientsController();
const listSalesController = new ListSalesController();
const registerBuyController = new RegisterBuyController();
const listBuysController = new ListBuysController();
const listProductsIngredientsController = new ListProductsIngredientsController();
const registerDailyProductionController = new RegisterDailyProductionController();
const listDailyProductionByDateController = new ListDailyProductionByDateController();

routes.post("/sell", registerSellController.handle);
routes.get("/sell/:date", listSalesController.handle);

routes.post("/buy", registerBuyController.handle);
routes.get("/buy/:date", listBuysController.handle);

// PRODUCTS
routes.post("/product", registerProductController.handle);
routes.get("/product", getAllProductsController.handle);

// INGREDIENTS
routes.post("/ingredient", registerIngredientController.handle);
routes.get("/ingredient", getAllIngredientsController.handle);

// DAILY PRODUCTION
routes.post("/daily", registerDailyProductionController.handle);
routes.get("/daily/:date", listDailyProductionByDateController.handle);

routes.get("/product/:productId/ingredients", listProductsIngredientsController.handle);

export { routes };
