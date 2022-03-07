import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/categories", categoriesRoutes);

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
