import { Router } from "express";
import { RetrieverController } from "../controllers/RetrieverController";

export const SupportingMaterialRoutes: Router = Router();

SupportingMaterialRoutes.get("/", RetrieverController.retrieve);