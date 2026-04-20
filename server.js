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
const transactionRoutes = require("./src/routes/transaction.routes");

/**
 * - Use Routes
 */

app.get('/', (req, res)=>{
    res.send("Ledger service is up and running.")
})

app.use('/api/auth', authRoutes)
app.use('/api/account', accountRoutes)
app.use('/api/transaction', transactionRoutes)


app.listen(3000, ()=>{
    console.log("Sever is running on PORT 3000...")
})