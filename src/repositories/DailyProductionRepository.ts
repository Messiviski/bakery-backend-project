import { PrismaClient, DailyProduction } from "@prisma/client";
import { ICreateDailyProductionDTO , IUpdateDailyProductionDTO } from "../dtos/IDailyProductionDTO";

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

  async findByDate({ date }: DailyProduction): Promise< DailyProduction[]> {
    const produced = await this.prisma.dailyProduction.findMany({
      where: {
        date: { 
          equals: date
        }
      }
    });

    return produced;
  }

  async findById(productId: number): Promise<DailyProduction | null> {
    const dailyProduction = await this.prisma.dailyProduction.findFirst({
      where: {
        productId: {
          equals: productId
        }
      }
    });

    return dailyProduction;
  }
  // async updateDailyProduction(id, { amount, date, time, productId}: IUpdateDailyProductionDTO): Promise<void>{
  //   const updateDailyProduction = await this.prisma.dailyProduction.merge(id,amount, date, time, productId);
  //   return this.prisma.dailyProduction.save(id);
  // }
}

export { DailyProductionRepository };