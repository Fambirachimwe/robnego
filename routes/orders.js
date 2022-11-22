import express from "express";
import Order from "../models/orders.js"



const router = express.Router();


router.post('/', (req, res, next) => {
    const { order } = req.body
    new Order({
        order: order
    }).save()
        .then(data => {
            res.send(data)
        })
})




export default router;