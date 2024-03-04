const Minio = require("minio")

const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_URL,
    port : parseInt(process.env.MINIO_PORT),
    useSSL: false,
    accessKey: process.env.ACCESS_KEY,
    secretKey: process.env.SECRET_KEY,
})

module.exports = minioClient