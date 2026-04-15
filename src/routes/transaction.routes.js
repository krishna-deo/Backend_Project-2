const {authMiddleware} = require("../middleware/auth.middleware")
const {Router} = require("express");
const transactionRoutes = Router();

/**
 *  - POST /api/auth/trasaction
 *  - Create a new Transaction
 */

transactionRoutes.post("/", authMiddleware,)

module.exports = transactionRoutes;