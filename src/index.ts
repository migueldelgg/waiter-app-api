import path from 'node:path'
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose.connect("mongodb://127.0.0.1:27017")
  .then(() => {
    const app = express();
    const uploadPath = path.resolve(__dirname, '..', 'uploads');

    app.use('/uploads', express.static(uploadPath))
    app.use(express.json());
    app.use(router);

    const port = 8080;
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((e) => console.error("❌ Erro ao conectar no MongoDB:", e));
