import express from 'express';

const app = express();
const port: number = 8080;

app.listen(8080, () => {
  console.log(`🚀 server start on port http://localhost:${port}`)
});
