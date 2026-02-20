// Server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";

const app = express()


app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use("/api/status", (req, res) => res.send("good"))

const server = http.createServer(app)

server.listen(3000, () => {
  console.log("Server running on 3000 ...")
})
