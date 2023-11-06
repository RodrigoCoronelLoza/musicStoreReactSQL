import express from "express";
import cors from "cors";
import accRouter from "./routers/acc.router.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/acc", accRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
