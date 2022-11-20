import mongoose from 'mongoose';
const Schema = mongoose.Schema;


// phoneNumber
// date and time
// number of people
// seatingType  


const reservationSchema = new Schema({
    phoneNumber: String,
    date: String,
    numberOfPersons: Number,
    seatingType: String,
    completed: { type: Boolean, default: false }
});



const Reservation = mongoose.model('reservation', reservationSchema);

export default Reservation;