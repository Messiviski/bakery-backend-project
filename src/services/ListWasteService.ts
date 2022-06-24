import { Waste } from "@prisma/client";
import { WasteRepository } from "../repositories/WasteRepository";

class ListWasteService {
  private wasteRepository: WasteRepository;

  constructor() {
    this.wasteRepository = new WasteRepository();
  }

  async execute(date: Date): Promise<Waste[]> {
    const waste = await this.wasteRepository.findByDate(date);

    return waste;
  }
}

export { ListWasteService };
