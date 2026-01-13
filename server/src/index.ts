import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app =express();
const port=5000;

app.use(cors());
app.use(express.json());

app.use('/tasks',taskRoutes);

app.get("/",(req,res)=>{
    res.send("server is running ")
});

app.listen (port,()=>{
    console.log(`server is running on port ${port}`)
})