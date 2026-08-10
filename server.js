const express = require("express")
const dotenv = require("dotenv").config();
const router = require("./routes/contactRoutes");

const app = express()

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.use("/api/contacts", router);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    
})