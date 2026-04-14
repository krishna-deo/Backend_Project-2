require("dotenv").config();
const express = require("express");
const cookieParser =  require("cookie-parser")

const app = express();

app.use(express.json());
app.use(cookieParser());

/**
 * - Required DataBase
 */
const connectDB = require("./src/db/db");
connectDB();

/**
 * - Required Routes
 */
const authRoutes = require("./src/routes/auth.routes");
const accountRoutes =  require("./src/routes/account.routes");

/**
 * - Use Routes
 */
app.use('/api/auth', authRoutes)
app.use('/api/account', accountRoutes)


app.listen(3000, ()=>{
    console.log("Sever is running on PORT 3000...")
})