import { FinancialRepository } from "../repositories/FinancialRepository";
import { ProductsRepository } from "../repositories/ProductsRepository";
import { AppError } from "../shared/errors/AppError";

interface IRequest {
  amount: number,
  timestamp: number,
  productId: number
}

class RegisterSellService {
  private financialRepository: FinancialRepository;
  private productsRepository: ProductsRepository;

  constructor() {
    this.financialRepository = new FinancialRepository();
    this.productsRepository = new ProductsRepository();
  }

  async execute({ amount, timestamp, productId }: IRequest): Promise<Object> {
    const product = await this.productsRepository.findById(productId)

    if(!product) {
      throw new AppError("Products does not exists!")
    }

    const fullDate = new Date(timestamp);

    await this.financialRepository.saveSale({
      amount,
      productId,
      date: fullDate,
      time: fullDate
    })

    return {};
  }
}

export { RegisterSellService };