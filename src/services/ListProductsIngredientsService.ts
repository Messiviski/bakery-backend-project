import { IngredientsRepository } from "../repositories/IngredientsRepository";
import { ProductsIngredientsRepository } from "../repositories/ProductsIngredientsRepository";

interface IProductsIngredientsDTO {
  id: number;
  name: string;
  amount: number;
}

class ListProductsIngredientsService {
  private productsOnIngredients: ProductsIngredientsRepository;
  private ingredientsRepository: IngredientsRepository;

  constructor() {
    this.productsOnIngredients = new ProductsIngredientsRepository();
    this.ingredientsRepository = new IngredientsRepository();
  }

  async execute(productId: number): Promise<IProductsIngredientsDTO[]> {
    const items = await this.productsOnIngredients.list(productId);
    const ingredients = await this.ingredientsRepository.list();

    const productsIngredients = []

    items.map(item => {
      productsIngredients.push({
        id: item.ingredientId,
        name: ingredients.find(ingredient => ingredient.id === item.ingredientId).name,
        amount: item.amount
      })
    })
    

    return productsIngredients;
  }
}

export { ListProductsIngredientsService };