import { PrismaClient, Ingredient } from "@prisma/client";
import { ICreateIngredientDTO } from "../dtos/IIngredientDTO";

class IngredientsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save({ name, amount }: ICreateIngredientDTO): Promise<Ingredient> {
    const newIngredient = await this.prisma.ingredient.create({
      data: {
        amount,
        name,
      },
    });

    return newIngredient;
  }

  async findById(id: number): Promise<Ingredient | null> {
    const ingredient = await this.prisma.ingredient.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    return ingredient;
  }

  async findByName(name: string): Promise<Ingredient | null> {
    const ingredient = await this.prisma.ingredient.findFirst({
      where: {
        name: {
          equals: name,
        },
      },
    });

    return ingredient;
  }

  async list(): Promise<Ingredient[]> {
    const ingredients = await this.prisma.ingredient.findMany();

    return ingredients;
  }
}

export { IngredientsRepository };
