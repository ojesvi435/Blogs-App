import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";

import cors from "cors"; //cors helps to allow request from frontend to backend

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)
mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb+srv://admin-harshit:harsh98@cluster0.z7onqvv.mongodb.net/blog?retryWrites=true"
  )
  .then(() =>
    app.listen(5000, (req, res) => {
      console.log("Connected with Mongodb-Atlas, listening at port: 5000");
    })
  ).catch((err)=>console.log(err));