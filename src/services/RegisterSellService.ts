import { Sell } from "@prisma/client";
import { FinancialRepository } from "repositories/FinancialRepository";

interface IRequest {
  amount: number,
  timestamp: number,
  productId: number
}

class RegisterSellService {
  private financialRepository: FinancialRepository;

  constructor() {
    this.financialRepository = new FinancialRepository();
  }

  async execute({ amount, timestamp, productId }: IRequest): Promise<Sell> {
    const fullDate = new Date(timestamp);

    const [ date, time ] = [
      `${fullDate.getFullYear()}-${fullDate.getMonth() + 1}-${fullDate.getDate()}`,
      `${fullDate.getHours()}-${fullDate.getMinutes()}-${fullDate.getSeconds()}`
    ]

    const newSell = this.financialRepository.saveSell({
      amount,
      date,
      time,
      productId
    })

    return newSell;
  }
}

export { RegisterSellService };