import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const orderSchem = new Schema({
    order: String,
    date: { type: Date, default: Date.now() },
    completed: { type: Boolean, default: false }
});


const Order = mongoose.model('order', orderSchem);


export default Order;
