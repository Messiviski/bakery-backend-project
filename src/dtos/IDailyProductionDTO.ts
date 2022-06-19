interface ICreateDailyProductionDTO {
    amount: number;
    date: Date;
    time: Date;
    productId: number;
  }

  interface IUpdateDailyProductionDTO {
    amount?: number;
    date?: Date;
    time?: Date;
    productId?: number;
  }

  export { ICreateDailyProductionDTO, IUpdateDailyProductionDTO };
  
  