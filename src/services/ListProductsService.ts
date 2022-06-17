import { Product } from "@prisma/client";
import { ProductsRepository } from "../repositories/ProductsRepository";

class ListProductsService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  async execute(): Promise<Product[]> {
    const products = this.productsRepository.list();

    return products;
  }
}

export { ListProductsService };