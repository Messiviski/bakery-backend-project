import { PrismaClient, DailyProduction } from "@prisma/client";
import { ICreateDailyProductionDTO } from "../dtos/IDailyProductionDTO";

class DailyProductionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save({ amount, date, time, productId }: ICreateDailyProductionDTO): Promise<DailyProduction> {
    const produced = await this.prisma.dailyProduction.create({
      data: {
        amount,
        date,
        time,
        productId
      }
    })

    return produced;
  }

  async findByDate( date: Date ): Promise< DailyProduction[]> {
    const produced = await this.prisma.dailyProduction.findMany({
      where: {
        date: { 
          equals: date
        }
      }
    })

    return produced;
  }

  async findByProduct(productId: number): Promise<DailyProduction | null> {
    const dailyProduction = await this.prisma.dailyProduction.findFirst({
      where: {
        productId: {
          equals: productId
        }
      }
    });

    return dailyProduction;
  }

  async findByProductIdAndDate(productId: number, date: Date): Promise<DailyProduction[]> {
    const dailyProduction = await this.prisma.dailyProduction.findMany({
      where: {
        productId: {
          equals: productId
        },
        date: {
          equals: date
        }
      }
    });

    return dailyProduction;
  }

  async list(): Promise<DailyProduction[]> {
    const productions = await this.prisma.dailyProduction.findMany();

    return productions;
  }
}

export { DailyProductionRepository };