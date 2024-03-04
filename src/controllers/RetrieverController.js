const minioClient = require("../minioConfig")

async function testConn (req, res) {

    try {
      const buckets = await minioClient.listBuckets()
      return res.status(200).send({"Connection": "OK", "Buckets": buckets})
    } catch (err) {
      return res.status(400).send({"Connection": "FAILED", "Error": err})
    }
}



module.exports = {
    testConn,
}