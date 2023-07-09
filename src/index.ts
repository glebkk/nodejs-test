import express from 'express'
import router from "./router/router";
const app = express()

app.use("/", router)
app.listen(5000, () => console.log("server started"))