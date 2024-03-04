import  { Request, Response } from "express";
import { minioClient } from "../minioConfig"

export const testConn = async (_req: Request, res: Response) : Promise<Response> => { 
  try {
    const buckets = await minioClient.listBuckets()
    return res.status(200).send("Connected to minio" + buckets)
  } catch (err) {
    return res.status(400).send("Unable to connect to minio")
  }
}