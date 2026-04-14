const accountModel = require("../models/account.model");
const express = require("express");


const createAccountController= async(req, res)=>{
    const user= req.user;
    const account= await accountModel.create({
        user: user._id
    })

    return res.status(201).json({
        account
    })
}

module.exports= {createAccountController}