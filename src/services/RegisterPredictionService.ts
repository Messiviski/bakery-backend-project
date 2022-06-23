import { FinancialRepository } from "../repositories/FinancialRepository";
import { PredictionRepository } from "../repositories/PredictionRepository";

class RegisterPredictionService {
  private predictionRepository: PredictionRepository;
  private financialRepositoy: FinancialRepository;
  constructor() {
    this.predictionRepository = new PredictionRepository();
    this.financialRepositoy = new FinancialRepository();
  }

  async execute(): Promise<Object> {
    console.log("Tamo aqui");
    return {};
  }
}

export { RegisterPredictionService };
