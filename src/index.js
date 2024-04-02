const dotenv= require("dotenv").config();
const express = require("express")
const SupportingMaterialRoutes = require("./routes/routes")


const PORT = parseInt(process.env.APP_PORT) || 3000
const app = express()


app.use(express.json( {limit: '50mb'} ))

app.use((req, res, next) => {
  if (req.originalUrl != "/metrics") {
    console.log(`\n\n${new Date().toLocaleString()} | Method: ${req.method} | URL: ${req.originalUrl}`)
  }
  next()
})

app.use("/smm", SupportingMaterialRoutes);
app.listen(PORT, () => {
  console.log(`Focusing manager listening on port ${PORT}`)
})