import express from "express";
import restaurtantsRouter from "./routes/restaurants.js";
import cuisinesRouter from "./routes/cuisines.js";
import { errorHandler } from "./middleware/errorHandler.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/restaurants", restaurtantsRouter);
app.use("/cuisines", cuisinesRouter);
app.use(errorHandler);
app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(`Error occurred: ${error.message}`);
  });
