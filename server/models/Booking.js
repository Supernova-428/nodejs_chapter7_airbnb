const { default: mongoose} = require('mongoose');

new bookingSchema = new mongoose.Schema({
    user: {
        type: pongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    place: {
        type: pongoose.Schema.ObjectId,
        ref: 'Place',
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkIOut: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking;