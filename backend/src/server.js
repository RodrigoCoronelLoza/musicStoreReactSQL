import express from "express";
import cors from "cors";
import accRouter from "./routers/acc.router.js";
import userRouter from "./routers/user.router.js";
import testRouter from "./routers/test.router.js";
import orderRouter from "./routers/order.router.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/acc", accRouter);
app.use("/api/users", userRouter);
app.use("/api/test", testRouter);
app.use("/api/orders", orderRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
