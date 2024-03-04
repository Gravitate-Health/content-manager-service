const { Router } = require('express');
const minioController = require("../controllers/RetrieverController")

const SupportingMaterialRoutes = Router();

SupportingMaterialRoutes.get("/test",minioController.testConn)

module.exports = SupportingMaterialRoutes