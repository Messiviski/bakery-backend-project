import { FinancialRepository } from "../repositories/FinancialRepository";
import { IngredientsRepository } from "../repositories/IngredientsRepository";

interface IListBuysDTO {
  name: string;
  amount: number;
  made_at: string;
  provider_name: string;
}

class ListBuysService {
  private financialRepository: FinancialRepository;
  private ingredientsRepository: IngredientsRepository;

  constructor(){
    this.financialRepository = new FinancialRepository();
    this.ingredientsRepository = new IngredientsRepository();
  }

  async execute (date: Date): Promise<IListBuysDTO[]> {
    const buys = await this.financialRepository.findBuyInfoByDate(date);

    buys.map(buy => delete buy.date);

    const ingredients = await this.ingredientsRepository.list();

    const modifiedBuys = []

    buys.map(buy => {
      modifiedBuys.push({
        amount: buy.amount,
        made_at: buy.time,
        provider_name: buy.providerName,
        name: ingredients.find(ingredient => ingredient.id === buy.ingredientId).name
      })
    })

    return modifiedBuys;
  }
}

export { ListBuysService };