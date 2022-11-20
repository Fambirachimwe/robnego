import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import reservationRoutes from "./routes/reservation.js";
import feedbackRoutes from "./routes/feedback.js";
import foodSuggestionRoutes from "./routes/foodSuggestion.js"



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

app.get('/', (req, res, next) => {
    res.send("this is the test route for carlos dashboard")
});


// routes 
app.use('/reservation', reservationRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/food-suggestion', foodSuggestionRoutes);




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
