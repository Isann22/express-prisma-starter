import { app } from "./app/app.js";
import { config } from "./app/config.js";

app.listen(config.PORT, () => {
  console.log(`server running at http://localhost:${config.PORT}`);
});
