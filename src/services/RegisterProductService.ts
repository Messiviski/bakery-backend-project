import { AppError } from "../shared/errors/AppError";
import { ProductsRepository } from "../repositories/ProductsRepository";
import { IngredientsRepository } from "../repositories/IngredientsRepository";
import { ProductsIngredientsRepository } from "../repositories/ProductsIngredientsRepository";

interface IIngredientsDTO {
  ingredientId: number;
  amount: number;
  productId?: number;
}
interface IRequest {
  name: string;
  ingredients: Array<IIngredientsDTO>;
}

class RegisterProductService {
  private productsRepository: ProductsRepository;
  private productsIngredients: ProductsIngredientsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
    this.productsIngredients = new ProductsIngredientsRepository();
  }

  async execute({ name, ingredients }: IRequest): Promise<Object> {
    const product = await this.productsRepository.findByName(name)

    if(product) {
      throw new AppError("This product already exists!");
    }
    
    await this.productsRepository.save(name)

    const { id: productId } = await this.productsRepository.findByName(name)

    const modifiedIngredients = []

    ingredients.forEach((ingredient) => {
      ingredient.productId = productId
      modifiedIngredients.push(ingredient)
    })

    await this.productsIngredients.save(modifiedIngredients)

    return {}
  }
}

export { RegisterProductService };