import { PrismaClient, ProductsOnIngredients } from "@prisma/client";

interface IProductsIngredientsDTO {
  productId: number;
  ingredientId: number;
  amount: number;
}

class ProductsIngredientsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save( props: IProductsIngredientsDTO[] ): Promise<void> {
    await this.prisma.productsOnIngredients.createMany({
      data: props
    })
  }

  async list(productId: number): Promise<ProductsOnIngredients[]> {
    const items = await this.prisma.productsOnIngredients.findMany({
      where: {
        productId: {
          equals: productId
        }
      }
    })

    return items;
  }
}

export { ProductsIngredientsRepository };