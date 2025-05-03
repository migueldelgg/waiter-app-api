import express from "express";
import mongoose from "mongoose";

import { router } from "./app/router";

mongoose.connect("mongodb://127.0.0.1:27017")
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    const port = 8080;
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((e) => console.error("❌ Erro ao conectar no MongoDB:", e));
