const express = require("express");
const app = express();
const userRouter = express.Router();

const users = require("../models/model");

userRouter.route('/add').post(
    (req, res)=>{
        const userData = new users(req.body);
        userData.save()
        .then(
            (user)=>{
                res.json("User added succssfully");
            }
        )
        .catch(
            error=>{
                res.status(400).send("User could not be added");
            }
        )

    }
)