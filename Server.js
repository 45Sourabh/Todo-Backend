import express from "express";
import mongoose from "mongoose";
import AddRoutes from "./Routes/AddRoute.js";
import cors from "cors"

const app=express();

const port=5050;
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true 
}));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
    console.log("Database Connected Successfully");
})
.catch(()=>{
    console.log("Database Not Connected")
})

AddRoutes(app);

app.listen(port,"0.0.0.0",()=>{
    console.log(`Server run at this server : http://localhost:${port}/`)
})

