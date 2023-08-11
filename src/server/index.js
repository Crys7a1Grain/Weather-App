import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.join(__dirname, "../../dist/");
console.log("staticPath = " + publicPath);

app.use(express.static(publicPath));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});