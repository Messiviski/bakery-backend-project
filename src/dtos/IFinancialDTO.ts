interface ICreateSellInfoDTO {
  amount: number;
  date: Date;
  time: Date;
  productId: number;
}

interface ICreateBuyInfoDTO {
  amount: number;
  date: Date;
  time: Date;
  ingredientId: number;
}

export { ICreateSellInfoDTO, ICreateBuyInfoDTO };
