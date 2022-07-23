import express from "express";
import bodyParser from "body-parser";
import { shuffleData } from "./data.js";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/films", async (req, res) => {
  try {
    const films = shuffleData();
    res.send(films);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhos:${PORT}`)
);
