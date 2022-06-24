import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { AppError } from "./shared/errors/AppError";
import HandleCronJobs from "./shared/utils/HandleCronJobs";
import cors from "cors";

const app = express();

app.use(cors())

app.use(express.json());

app.use("/api", routes);

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

HandleCronJobs()

app.listen(3333, () => console.log("Server is running"));
