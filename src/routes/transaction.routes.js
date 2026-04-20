const {authMiddleware} = require("../middleware/auth.middleware")
const {Router} = require("express");
const transactionRoutes = Router();
const transactionController = require("../controllers/transaction.controller")
/**
 *  - POST /api/auth/trasaction
 *  - Create a new Transaction
 */

transactionRoutes.post("/", authMiddleware,transactionController.createTransaction)

/**
 * - POST /api/transactions/system/initial-funds
 * - Create initial funds transaction from system user
 */
transactionRoutes.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)

module.exports = transactionRoutes;