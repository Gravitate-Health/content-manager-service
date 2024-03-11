const { Router } = require('express');
const minioController = require("../controllers/RetrieverController")

const { Readable } = require('stream');
const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const SupportingMaterialRoutes = Router();

SupportingMaterialRoutes.get("/test",minioController.testConn)

SupportingMaterialRoutes.post("/upload", upload.single('hola'), minioController.uploadFile)

SupportingMaterialRoutes.get("/resource/:id",minioController.retrieveFile)

module.exports = SupportingMaterialRoutes