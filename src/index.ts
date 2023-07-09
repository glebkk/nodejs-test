import express from 'express'
import router from "./router/router";

let app = express()


app.use("/router", router)
app.get("/", (req,res) => {
    res.json("Helg1lo");
})


app.listen(5000, () => console.log("Server started"))