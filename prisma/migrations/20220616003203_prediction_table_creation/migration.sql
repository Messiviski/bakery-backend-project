-- CreateTable
CREATE TABLE "Prediction" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "amount" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Prediction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Prediction" ADD CONSTRAINT "Prediction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
