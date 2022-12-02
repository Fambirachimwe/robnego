import express from 'express';
import Reservation from "../models/reservation.js"


const router = express.Router();


router.get('/', (req, res, next) => {
    Reservation.find().then(data => {
        if (data.length > 0) {
            res.send(data)
        } else {
            res.send("No reservations found")
        }
    }).catch(err => {
        res.status(400).send(err)
    })
});


router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Reservation.findById(id).then(data => {
        if (data) {
            res.send(data)
        } else {
            res.send("Reservation not found")
        }
    }).catch(err => {
        res.status(400).send(err)
    })
});


router.post('/', (req, res, next) => {
    const { phoneNumber, date, numberOfPersons, seatingType } = req.body;

    new Reservation({
        phoneNumber: phoneNumber,
        date: date,
        numberOfPersons: numberOfPersons,
        seatingType: seatingType
    }).save()
        .then(data => {
            res.send("reservation saved")
        }).catch(err => {
            res.send("Reservation not saved")
        }).catch(err => {
            res.status(400).send(err)
        })
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Reservation.findByIdAndDelete(id).then(() => {
        res.send("reservation deleted")
    }).catch(err => {
        console.log(err)
    })
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { completed } = req.body;
    Reservation.findByIdAndUpdate(id, {
        completed: completed
    }).then(() => {
        res.send("Reservation update completed")
    })
})

export default router;