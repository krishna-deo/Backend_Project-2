const accountModel = require("../models/account.model");
const express = require("express");


const createAccountController = async (req, res) => {
    try {
        const user = req.user;

        const account = await accountModel.create({
            user: user._id
        });

        return res.status(201).json({
            account
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

module.exports= {createAccountController}