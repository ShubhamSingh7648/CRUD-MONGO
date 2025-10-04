const express = require("express");
const { createUser, updateUser, deleteUser, getUser} = require("../controllers/user-controller");
const router = express.Router();

router.post("/createUser", createUser); // api/users/create
router.get("/getUser/:id", getUser);    // api/users/5
router.delete("/deleteUser/:id", deleteUser);  // api/users/3
router.patch("/updateUser/:id", updateUser);   // api/users/7

module.exports = router;