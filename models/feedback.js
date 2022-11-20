import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const feedbackSchema = new Schema({
    feedback: String,
    resolved: { type: Boolean, default: false },
    date: { type: Date, default: Date.now() }
});


const Feedback = mongoose.model("feedback", feedbackSchema);
export default Feedback;

