import express from "express";
import Order from "../models/orders.js"



const router = express.Router();


router.get('/', (req, res, next) => {
    Order.find().then(data => {
        if (data.length < 1) {
            res.send("No orders")
        } else {
            res.send(data)
        }
    })
})


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