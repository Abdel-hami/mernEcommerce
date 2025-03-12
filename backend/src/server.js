import express from "express"
import {config} from "dotenv"
import productRoutes from "./routes/product.routes.js";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import { errorHandler, notFound } from "./middleware/errorhandler.js";
const app = express();
app.use(express.json());
app.use(cors());

config();
const port = process.env.PORT || 5000;
// app.use();

app.use("/api/product", productRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`listening at port : ${port}`);
    connectDB();
})