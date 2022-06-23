import { DailyProductionRepository } from "../repositories/DailyProductionRepository";

interface IRequest { 
  productId: number;
  amount: number;
  timestamp: string;
}

class RegisterDailyProductionService {
  private dailyProductionRepository: DailyProductionRepository;

  constructor() {
    this.dailyProductionRepository = new DailyProductionRepository();
  }

  async execute({ productId, amount, timestamp }: IRequest): Promise<Object> {
    const fullDate = new Date(timestamp)

    await this.dailyProductionRepository.save({
      productId,
      amount,
      date: fullDate,
      time: fullDate
    });

    return {};
  }
}

export { RegisterDailyProductionService };