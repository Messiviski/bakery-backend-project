import { FinancialRepository } from "../repositories/FinancialRepository";
import { IngredientsRepository } from "../repositories/IngredientsRepository";
import { AppError } from "../shared/errors/AppError";

interface IRequest {
  amount: number,
  timestamp: number,
  ingredientId: number
}

class RegisterBuyService{
  private financialRepository: FinancialRepository;
  private ingredientsRepository: IngredientsRepository;

  constructor() {
    this.financialRepository = new FinancialRepository();
    this.ingredientsRepository = new IngredientsRepository();
  }

  async execute({ amount, timestamp, ingredientId }: IRequest): Promise<Object>{
    const ingredient = await this.ingredientsRepository.findById(ingredientId)

    console.log(ingredient)

    if(!ingredient) {
      throw new AppError("Ingredients does not exists!")
    }

    const fullDate = new Date(timestamp);

    await this.financialRepository.saveBuy({
      productId,
      date: fullDate,
      time: fullDate
    })

    return{};
  }
} 

export { RegisterBuyService };