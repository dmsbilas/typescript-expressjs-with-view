import express from "express";
const fishManagementRoute = express.Router();

fishManagementRoute.get("/", (req, res, next)=>{
    res.send("I am from fish management Route");
});


export = fishManagementRoute;