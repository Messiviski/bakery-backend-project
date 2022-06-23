import cron from "node-cron";
import { HandleProductsWasteService } from "../../services/HandleProductsWasteService";
import { RegisterPredictionService } from "../../services/RegisterPredictionService";

export default () => {
  const handleProductsWasteService = new HandleProductsWasteService();

  cron.schedule("* * * * MON-FRI", () => {
    handleProductsWasteService.execute()
  });

  // cron.schedule("0 22 * * MON-FRI", () => {
  
  // });

  console.log("||====================================||")
  console.log("||           JOBS SCHEDULED!          ||")
  console.log("||====================================||")
}