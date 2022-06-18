import { Ingredients } from "@prisma/client";
import { IngredientsRepository } from "../repositories/IngredientsRepository";

class ListIngredientsService {
  private ingredientsRepository: IngredientsRepository;

  constructor() {
    this.ingredientsRepository = new IngredientsRepository();
  }

  async execute(): Promise<Ingredients[]> {
    const ingredients = this.ingredientsRepository.list();

    return ingredients;
  }
}

export { ListIngredientsService };
