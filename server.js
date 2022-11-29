import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import reservationRoutes from "./routes/reservation.js";
import feedbackRoutes from "./routes/feedback.js";
import foodSuggestionRoutes from "./routes/foodSuggestion.js";
import orderRoutes from "./routes/orders.js"
import User from './models/users.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';



mongoose.connect(`${process.env.OB_DB}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to OB');
}).on('error', (error) => {
    console.log('connection error ', error);
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.send("this is the test route for carlos dashboard")
});

app.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    User.find({ email: email }).then(data => {
        if (data.length > 0) {

            bcrypt.compare(password, data[0].password, function (err, result) {
                // result == true
                if (result) {
                    const token = jwt.sign(
                        {
                            data: data._id
                        }
                        , 'secret'
                    );

                    res.json({
                        status: 200,
                        token: token
                    })

                } else {
                    res.json({
                        status: 401,
                        message: "username or password is incorrect"
                    })
                }
            });

        } else {
            res.json({
                status: 401,
                message: "username or password is incorrect"
            })
        }
    })

})


app.post('/register', (req, res, next) => {
    const { username, email, phoneNumber, password } = req.body;

    //  check if the email provvide is in the db
    User.find({ email: email }).then(data => {
        if (data.length > 0) {

            res.json({
                status: 400,
                message: "Email provided is alredy in use",
            })
        } else {
            bcrypt.hash(password, 10, function (err, hash) {
                // Store hash in your password DB.

                try {

                    new User({
                        username: username,
                        email: email,
                        password: hash,
                        phoneNumber: phoneNumber
                    }).save()
                        .then(data => {
                            res.json({
                                status: 200,
                                message: "user Created",
                            })
                        })

                } catch (error) {
                    res.json({
                        status: 401,
                        message: "Failed to Create User",
                    })
                }

            });
        }
    })
})


// routes 
app.use('/reservation', reservationRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/food-suggestion', foodSuggestionRoutes);
app.use('/orders', orderRoutes)




// error Handling

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})


app.listen(PORT, console.log(`Server started on port ${PORT}`));
