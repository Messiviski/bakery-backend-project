import { AppError } from "../shared/errors/AppError";
import { IngredientsRepository } from "../repositories/IngredientsRepository";

interface IRequest {
  amount: number;
  name: string;
}

class RegisterIngredientServices {
  private ingredientsRepository: IngredientsRepository;

  constructor() {
    this.ingredientsRepository = new IngredientsRepository();
  }

  async execute({ amount, name }: IRequest): Promise<Object> {
    const ingredient = await this.ingredientsRepository.findByName(name);

    if (ingredient) {
      throw new AppError("This product alredy exists!");
    }

    await this.ingredientsRepository.save({ amount, name });

    return {};
  }
}

export { RegisterIngredientServices };
