import { AppError } from "../shared/errors/AppError";
import { DailyProductionRepository } from "../repositories/DailyProductionRepository";
import { ICreateDailyProductionDTO } from "../dtos/IDailyProductionDTO";

interface IRequest {
  data: ICreateDailyProductionDTO
}

class RegisterDailyProductionService {
  private dailyProductionRepository: DailyProductionRepository;

  constructor() {
    this.dailyProductionRepository = new DailyProductionRepository();
  }

  async execute({ data }: IRequest): Promise<Object> {
    const DailyProduction = await this.dailyProductionRepository.findById(data.productId);

    if (DailyProduction) throw new AppError("This product already exists!");

    await this.dailyProductionRepository.save(data);

    return {};
  }
}

export { RegisterDailyProductionService };
