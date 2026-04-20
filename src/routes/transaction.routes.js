const {authMiddleware} = require("../middleware/auth.middleware")
const {Router} = require("express");
const transactionRoutes = Router();
const transactionController = require("../controllers/transaction.controller")
/**
 *  - POST /api/auth/trasaction
 *  - Create a new Transaction
 */

transactionRoutes.post("/", authMiddleware,transactionController.createTransaction)

module.exports = transactionRoutes;