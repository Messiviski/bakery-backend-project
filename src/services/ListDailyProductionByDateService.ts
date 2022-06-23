import { DailyProduction } from "@prisma/client";
import { DailyProductionRepository } from "../repositories/DailyProductionRepository";

class ListDailyProductionByDateService {
  private dailyProductionRepository: DailyProductionRepository;

  constructor() {
    this.dailyProductionRepository = new DailyProductionRepository();
  }

  async execute(date: Date): Promise<DailyProduction[]> {
    const dailyProduction = await this.dailyProductionRepository.findByDate(
      date
    );

    dailyProduction.map(produced => delete produced.date)

    return dailyProduction;
  }
}

export { ListDailyProductionByDateService };