import { Sell } from "@prisma/client";
import { FinancialRepository } from "../repositories/FinancialRepository";

class ListSalesService {
  private financialRepository: FinancialRepository;

  constructor() {
    this.financialRepository = new FinancialRepository();
  }

  async execute(date: Date): Promise<Sell[]> {
    const sales = await this.financialRepository.findSaleInfoByDate(date);
    
    sales.map(sale => delete sale.date);

    return sales;
  }
}

export { ListSalesService };