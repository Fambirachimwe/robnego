import express from "express";
import Feedback from "../models/feedback.js";



const router = express.Router();


// get all feedback 
router.get('/', (req, res, next) => {
    Feedback.find().then(data => {
        if (data.length > 0) {
            res.send(data)
        } else {
            res.send("No feedback found")
        }
    })
});


router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Feedback.findById(id).then(data => {
        if (data) {
            res.send(data)
        } else {
            res.send("feedback not found")
        }
    })
});

router.post('/', (req, res, next) => {
    const { feedback } = req.body;

    new Feedback({
        feedback: feedback
    }).save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            console.log(err)


        })
})




export default router;
