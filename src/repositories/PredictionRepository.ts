import { PrismaClient, Prediction } from "@prisma/client";
import { IPredictionDTO } from "../dtos/IPredictionDTO";

class PredictionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save({
    amount,
    date,
    time,
    productId,
  }: IPredictionDTO): Promise<Prediction> {
    const predicted = await this.prisma.prediction.create({
      data: {
        amount,
        date,
        time,
        productId,
      },
    });

    return predicted;
  }
}

export { PredictionRepository };
