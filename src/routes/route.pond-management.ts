import express from "express";
import { PondManagementService } from "../services/service.pond-management";
const pondManagementRouter = express.Router();

const pondManagementService = PondManagementService.getInstance();

pondManagementRouter.get("/", (req, res , next) =>{
    res.send("I am from pond management ");
});

pondManagementRouter.post("/add", (req,res,next)=>{
    // tslint:disable-next-line:no-console
    // console.log(req.body.pondName);
    const pondName = req.body.pondName;
    pondManagementService.addPond(pondName).then((response)=>{
        res.send(response);
    });
});




export = pondManagementRouter ;