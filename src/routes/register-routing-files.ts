import express from "express";
import pondManagementRoutes from "./route.pond-management";
import fishManagementRoutes from "./route.fish-management";
import adminDashboardRouter from "./route.admin.dashboard";

const registeredRouters = express.Router();

// registeredRouters.use("/pond", pondManagementRoutes);
// registeredRouters.use("/fish", fishManagementRoutes)
registeredRouters.use("/", adminDashboardRouter);


export = registeredRouters ;


