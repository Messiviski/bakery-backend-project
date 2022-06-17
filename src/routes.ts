import { RegisterIngredientController } from "./controllers/RegisterIngredientController";
import { RegisterProductController } from "./controllers/RegisterProductController";
import { RegisterSellController } from "./controllers/RegisterSellController";

import { Router } from "express";

const routes = Router();
const registerSellController = new RegisterSellController();
const registerProductController = new RegisterProductController();
const registerIngredientController = new RegisterIngredientController();

routes.post("/sell", registerSellController.handle);
routes.post("/product", registerProductController.handle);
routes.post("/ingredient", registerIngredientController.handle);

export { routes };
