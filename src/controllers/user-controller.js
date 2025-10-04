const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        const response = await User.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            message: "successfully created the user",
            error: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while creating user",
            data: {},
            error: error,
            success: false
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await User.findByIdAndDelete(req.params.id);
        return res.status(StatusCodes.OK).json({
            message: "successfully deleted the user",
            error: {},
            data: response,
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while deleting user",
            data: {},
            error: error,
            success: false
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const response = await User.findByIdAndUpdate(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            message: "successfully updated the user",
            error: {},
            data: response,
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while updating user",
            data: {},
            error: error,
            success: false
        })
    }
}

const getUser = async (req, res) => {
    try {
        const response = await User.findById(req.params.id);
        return res.status(StatusCodes.OK).json({
            message: "successfully fetched the user",
            error: {},
            data: response,
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while fetching user",
            data: {},
            error: error,
            success: false
        })
    }
}

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser
}