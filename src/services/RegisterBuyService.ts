import { FinancialRepository } from "../repositories/FinancialRepository";
import { IngredientsRepository } from "../repositories/IngredientsRepository";
import { AppError } from "../shared/errors/AppError";

interface IRequest {
  amount: number,
  timestamp: number,
  ingredientId: number,
  providerName: string
}

class RegisterBuyService{
  private financialRepository: FinancialRepository;
  private ingredientsRepository: IngredientsRepository;

  constructor() {
    this.financialRepository = new FinancialRepository();
    this.ingredientsRepository = new IngredientsRepository();
  }

  async execute({ amount, timestamp, ingredientId, providerName }: IRequest): Promise<Object>{
    const ingredient = await this.ingredientsRepository.findById(ingredientId)

    console.log(ingredient)

    if(!ingredient) {
      throw new AppError("The ingredient does not exists!")
    }

    const fullDate = new Date(timestamp);

    await this.financialRepository.saveBuy({
      ingredientId,
      date: fullDate,
      time: fullDate,
      amount,
      providerName
    })

    return {};
  }
} 

export { RegisterBuyService };