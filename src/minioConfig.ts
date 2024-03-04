import Minio from "minio"

export const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_URL || "",
    port : parseInt(process.env.MINIO_PORT || "0"),
    useSSL: false,
    accessKey: process.env.ACCESS_KEY || "",
    secretKey: process.env.SECRET_KEY || "",
})