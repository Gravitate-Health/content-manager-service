import { Router } from "express";
import * as minioController  from "../controllers/RetrieverController";

export const SupportingMaterialRoutes: Router = Router();

SupportingMaterialRoutes.get("/test",minioController.testConn);