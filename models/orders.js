import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const orderSchem = new Schema({
    order: String
});


const Order = mongoose.model('order', orderSchem);


export default Order;
