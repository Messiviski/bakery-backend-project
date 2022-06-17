import { PrismaClient, Product } from "@prisma/client";

class ProductsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(name: string): Promise<Product> {
    const newProduct = await this.prisma.product.create({
      data: {
        name
      }
    })

    return newProduct;
  }

  async findById(id: number): Promise<Product|null> {
    const product = await this.prisma.product.findFirst({
      where: {
        id: {
          equals: id
        }
      }
    })

    return product;
  }

  async findByName(name: string): Promise<Product|null> {
    const product = await this.prisma.product.findFirst({
      where: {
        name: {
          equals: name
        }
      }
    })

    return product;
  }

  async list(): Promise<Product[]> {
    const products = await this.prisma.product.findMany()

    return products;
  }
}

export { ProductsRepository };