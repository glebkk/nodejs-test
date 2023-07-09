import { Router} from "express";
let router = Router()

router.get("/", (req, res) => {
    res.json("houter work")
})

export default router;