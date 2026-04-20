const mongoose = require("mongoose");
const ledgerSchema = new mongoose.Schema({
    account:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"account",
        required: [true, "Ledger must be associated with an account."],
        index:true,
        immutable: true,
    },
    ammount:{
        type: Number,
        required: [true, "Amount must be required for creating a ledger entry."],
        immutable: true
    },
    transaction:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"transaction",
        required:[true,"Ledger must be associated with a transaction."],
        index: true,
        immutable: true
    },
    type:{
        type: String,
        enum:{
            values:["CREDIT","DEBIT"],
            message: "Type can be either CREDIT or DEBIT",
        },
        required:[true,"Ledger type is required."],
        immutable: true
    }

})


const preventLedgerModification=()=>{
    throw new Error("Ledger entires are immutable cannot be modified or deleted")
}

ledgerSchema.pre('findoneAndUpdate',preventLedgerModification);
ledgerSchema.pre('findoneAndDelete',preventLedgerModification);
ledgerSchema.pre('findoneAndReplace',preventLedgerModification);
ledgerSchema.pre('updateOne',preventLedgerModification);
ledgerSchema.pre('updateMany',preventLedgerModification);
ledgerSchema.pre('deleteOne',preventLedgerModification);
ledgerSchema.pre('deleteMany',preventLedgerModification);
ledgerSchema.pre('remove',preventLedgerModification);
ledgerSchema.pre('deleteMany',preventLedgerModification);

const ledgerModel = mongoose.model("ledger", ledgerSchema)

module.exports= ledgerModel