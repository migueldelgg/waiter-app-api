import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();

    const port: number = 8080;
    app.listen(port, () => {
      console.log(`🚀 server start on port http://localhost:${port}`);
    });
  })
  .catch((e) => console.log(e.error));
