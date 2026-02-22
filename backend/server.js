// Server.js
import "dotenv/config";
import http from "http";
import app from './src/app.js'
import connectDB from "./src/config/db/db.js";

await connectDB();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server running on 3000 ...")
})
