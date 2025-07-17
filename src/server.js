import { app } from "./app/app.js";
import { config } from "./app/config.js";
import logger from "./helper/logger.js";

app.listen(config.PORT, () => {
  logger.info(`server running at http://localhost:${config.PORT}`);
});
