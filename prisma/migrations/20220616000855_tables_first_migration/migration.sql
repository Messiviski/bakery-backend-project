/*
  Warnings:

  - You are about to drop the `Fornecedor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Fornecedor";

-- CreateTable
CREATE TABLE "Buy" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "Buy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsOnIngredients" (
    "ingredientId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "ProductsOnIngredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyProduction" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "DailyProduction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sell" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Sell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waste" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Waste_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Buy" ADD CONSTRAINT "Buy_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnIngredients" ADD CONSTRAINT "ProductsOnIngredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnIngredients" ADD CONSTRAINT "ProductsOnIngredients_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyProduction" ADD CONSTRAINT "DailyProduction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sell" ADD CONSTRAINT "Sell_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waste" ADD CONSTRAINT "Waste_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
