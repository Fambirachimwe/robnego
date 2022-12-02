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
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Order.findById(id).then(data => {
        if (data) {
            res.send(data)

        } else {
            res.send("No orders")
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
});

router.put('/:id', (req, res, next) => {
    const { id } = req.params;

    const { completed } = req.body;

    Order.findByIdAndUpdate(id, {
        completed: completed
    }).save()
        .then(data => {
            res.send(data)
        })

})


router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Order.findOneAndDelete({ _id: id }).then((data) => {
        res.send("Order deleted")
    })
})


export default router;