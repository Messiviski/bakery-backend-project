import { AppError } from "../shared/errors/AppError";
import { IngredientsRepository } from "../repositories/IngredientsRepository";

class RegisterIngredientService {
  private ingredientsRepository: IngredientsRepository;

  constructor() {
    this.ingredientsRepository = new IngredientsRepository();
  }

  async execute( name: string ): Promise<Object> {
    const ingredient = await this.ingredientsRepository.findByName(name);

    if (ingredient) {
      throw new AppError("This ingredient already exists!");
    }

    await this.ingredientsRepository.save(name);

    return {};
  }
}

export { RegisterIngredientService };
