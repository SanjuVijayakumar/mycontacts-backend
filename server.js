import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import dotenv from "dotenv";
import Router from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorhandler.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// Routes
app.use("/api/contacts", Router);

// Error Handler
app.use(errorHandler);

// Connect MongoDB
connectDB()
.then(() => {
    app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
})

// app.listen(PORT, ()=> {
//     console.log(`Server is running on port ${PORT}`);
    
// })