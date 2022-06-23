import { Product } from "@prisma/client";
import { DailyProductionRepository } from "../repositories/DailyProductionRepository";
import { FinancialRepository } from "../repositories/FinancialRepository";
import { ProductsRepository } from "../repositories/ProductsRepository";

class ListProductsService {
  private productsRepository: ProductsRepository;
  private dailyProductionRepository: DailyProductionRepository;
  private financialRepository: FinancialRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
    this.dailyProductionRepository = new DailyProductionRepository();
    this.financialRepository = new FinancialRepository();
  }

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.list();

    const productions = await this.dailyProductionRepository.findByDate(
      new Date()
    );

    const sales = await this.financialRepository.findSaleInfoByDate(
      new Date()
    );

    const productsWithAmount = [];
  
    products.map(product => {
      const filteredSales = sales.filter(
        sale => sale.productId === product.id
      );
      const filteredProductions = productions.filter(
        production => production.productId === product.id
      );

      const salesAmount = filteredSales
        .map(sales => sales.amount)
        .reduce((prevElem, elem) => prevElem + elem, 0)

      const productionAmount = filteredProductions
        .map(production => production.amount)
        .reduce((prevElem, elem) => prevElem + elem, 0)

      productsWithAmount.push({
        id: product.id,
        name: product.name,
        amount: (productionAmount - salesAmount)
      })
    })

    return productsWithAmount;
  }
}

export { ListProductsService };