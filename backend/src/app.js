import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express()

app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use("/api", router);
app.use("/api/status", (req, res) => res.send("good"))

export default app;