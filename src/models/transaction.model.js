const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    fromAccount:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true," Transaction must be assosiated with from account."],
        index: true
    },
    toAccount:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true," Transaction must be assosiated with from account."],
        index: true
    },
    status:{
        type:String,
        enum:{
            value:["PENDING","COMPLETED","FAILED", "REVERSED"],
            message:"Status can either PENDING, COMPLETED, FAILED or REVERSED",
        },
        default: "PENDING",
    },
    amount:{
        type: Number,
        required: [True, "Amount is required for creating a transaction"],
        min:[0,"Transaction amount cannot be negative"],
    },
    idempotencyKey:{
        type: String,
        req:[true,"Idempotency key is required for creating a transaction"],
        index: true,
        unique: true,
    },
},{
    timestamps:true
})

const transactionModel= mongoose.model("transaction", transactionSchema)

module.exports = transactionModel