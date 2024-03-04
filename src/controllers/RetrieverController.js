const minioConf = require("../minioConfig") 

async function testConn (req, res) {
  try {
      const buckets = await minioConf.minioClient()
      return res.status(200).send("Connected to minio")
  } catch (err) {
      return res.status(400).send(err)
  }
}

module.exports = {
  testConn
}
