import { IWasteDTO } from "../dtos/IWasteDTO";
import { DailyProductionRepository } from "../repositories/DailyProductionRepository";
import { FinancialRepository } from "../repositories/FinancialRepository";
import { ProductsRepository } from "../repositories/ProductsRepository";
import { WasteRepository } from "../repositories/WasteRepository";

class HandleProductsWasteService {
  private productsRepository: ProductsRepository;
  private dailyProductionRepository: DailyProductionRepository;
  private financialRepository: FinancialRepository;
  private wasteRepository: WasteRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
    this.dailyProductionRepository = new DailyProductionRepository();
    this.financialRepository = new FinancialRepository();
    this.wasteRepository = new WasteRepository();
  }

  async execute(): Promise<void> {

    const products = await this.productsRepository.list();

    const productions = await this.dailyProductionRepository.findByDate(
      new Date()
    );

    const sales = await this.financialRepository.findSaleInfoByDate(
      new Date()
    );

    const wastedProducts: IWasteDTO[] = products.map(product => {
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

      const amountWasted = (productionAmount - salesAmount)

      if (amountWasted > 0) {
        return {
          productId: product.id,
          date: new Date(),
          amount: amountWasted
        }
      }
    })


    await this.wasteRepository.save(wastedProducts);
  }
}

export { HandleProductsWasteService }