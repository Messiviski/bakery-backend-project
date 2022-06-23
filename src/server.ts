import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { RegisterPredictionService } from "./services/RegisterPredictionService";
import { routes } from "./routes";
import { AppError } from "./shared/errors/AppError";
var cors = require("cors");
var cron = require("node-cron");

const app = express();
const registerPredictionService = new RegisterPredictionService();

app.use(cors());

app.use(express.json());

app.use("/api", routes);

cron.schedule("5 * * * * *", () => {
  registerPredictionService.execute();
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running"));
