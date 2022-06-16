import { AppError } from "../shared/errors/AppError";
import { ProductsRepository } from "../repositories/ProductsRepository";

interface IRequest {
  name: string
}

class RegisterProductService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  async execute({ name }: IRequest): Promise<Object> {
    const product = await this.productsRepository.findByName(name)

    if(product) {
      throw new AppError("This product already exists!");
    }

    await this.productsRepository.save(name)

    return {}
  }
}

export { RegisterProductService };