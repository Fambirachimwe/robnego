import express from "express";
import FoodSuggestion from "../models/FoodSuggestion.js";



const router = express.Router();


// get all feedback 
router.get('/', (req, res, next) => {
    FoodSuggestion.find().then(data => {
        if (data.length > 0) {
            res.send(data)
        } else {
            res.send("No feedback found")
        }
    })
});


router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    FoodSuggestion.findById(id).then(data => {
        if (data) {
            res.send(data)
        } else {
            res.send("feedback not found")
        }
    })
});

router.post('/', (req, res, next) => {
    const { suggestion } = req.body;

    new FoodSuggestion({
        suggestion: suggestion
    }).save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
})




export default router;
