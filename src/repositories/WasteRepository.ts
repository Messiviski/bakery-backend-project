import { PrismaClient, Waste } from "@prisma/client";
import { IWasteDTO } from "../dtos/IWasteDTO";

class WasteRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(props: IWasteDTO[]): Promise<void> {
    await this.prisma.waste.createMany({
      data: props
    })
  }

  async findByDate(date: Date): Promise<Waste[]> {
    const waste = await this.prisma.waste.findMany({
      where: {
        date: {
          equals: date
        }
      }
    })

    return waste;
  }
}

export { WasteRepository };