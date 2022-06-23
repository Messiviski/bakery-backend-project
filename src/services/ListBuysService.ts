import { Buy } from "@prisma/client";
import { FinancialRepository } from "../repositories/FinancialRepository";

class ListBuysService {
  private financialRepository: FinancialRepository;

  constructor(){
    this.financialRepository = new FinancialRepository();
  }

  async execute (date: Date): Promise<Buy[]> {
    const buys = await this.financialRepository.findBuyInfoByDate(date);

    buys.map(buy => delete buy.date);

    return buys;
  }
}

export { ListBuysService };