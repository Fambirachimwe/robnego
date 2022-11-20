import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const suggestionSchema = new Schema({
    suggestion: String,
    date: { type: Date, default: Date.now() }
});

const FoodSuggestion = mongoose.model('foodSuggestion', suggestionSchema);

export default FoodSuggestion;


