const encryptPassword = require("../utils/PasswordEncrypt");
const coordinatorModel = require('../models/CoordinatorModel');
const authModel = require('../models/AuthModel')
const tokenUtil = require("../utils/TokenUtil")

const addCoordinator = async(req, res) => {
    const coordinatorData = {
        id:req.body.id,
        password:encryptPassword.encryptPassword(req.body.password),
        sport:req.body.sport
    } 
    try {
        const coordinator = new coordinatorModel(coordinatorData);
        const savedCoordinators = await coordinator.save();
        if (savedCoordinators) {
            res.status(200).json({
                message: "coordinator Successfully added!",
                data: savedCoordinators
            });
        } else {
            res.status(400).json({
                message: "coordinator not added"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "error in database",
            error: err
        })
    }
}

const loginCoordinator = async(req ,res) => {
    const id = req.body.id;
    const password = req.body.password;
    const sport = req.body.sport;
    console.log(id,password)
    const coordinator = await coordinatorModel.findOne({ id: id });
    console.log("coordinator", coordinator);

    if (coordinator) {
        const flag = encryptPassword.comparePassword(password, coordinator.password);
        console.log(flag);
        if (flag) {
            // generating token
            const token = tokenUtil.generateToken(coordinator.toObject())
            console.log(token)
            // saving token to database for security purpose

            const saveToken = {
              token:token,
              coordinator:coordinator._id
            }

            const dbtoken = new authModel(saveToken);
            await dbtoken.save();

            //Sending response
            res.status(200).json({
                message: "Login success",
                token:token,
                coordinator : coordinator
            })
        }
        else {
            res.status(404).json({
                message: "Login failed",
                data: []
            })
        }
    }
    else {
        res.status(404).json({
            message: "Register first",
            data: []
        })
    }
}

const listAllCoordinators = async(req,res) => {
    try{
        const listCoordinators = await coordinatorModel.find();
        if(listCoordinators){
            res.status(200).json({
                count:listCoordinators.length,
                message:"coordinators fetched successfully",
                data:listCoordinators
            })
        }else{
            res.status(404).json({
                message: "some error occured in fetching coordinators",
                data: []
            })
        }
    }catch(err){
        res.status(500).json({
            error:err,
            message:"some error occured in database"
        })
    }
}

module.exports = {
    addCoordinator,
    loginCoordinator,
    listAllCoordinators
}